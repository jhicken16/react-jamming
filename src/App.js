import React, {useState, useEffect} from 'react'

import SearchContainer from './search/SearchContainer.js'
import TrackListContainer from "./lists/TrackListComponent.js"
import PlayList from './lists/PlayList.js'
import authorize from './spotify/authorize.js'
import fetchSpotifyUserName from './spotify/fetchSpotifyUsername.js'
import spotifyMakePlayList from './spotify/spotifyMakePlayList.js'
import spotifyAddTracksToPlayList from './spotify/spotifyAddTracksToPlayList.js'

function App(){

    //going to have to put a uri in this is what spotify uses to track songs.
    //playList songs
    const [listOfSongs, setListOfSongs] = useState([])

    //Authorization contains object with peramitors for accessing spotify api
    const [authorization, setAuthorization] = useState({})

    //get trackList form search and send to trackList
    const [spotifyList, setSpotifyList] = useState([])

    useEffect(() => {
        //redirects to spotifies webpage to log in and returns authorization key
            const fetchData = async () => {
                const auth = await authorize()
                //Take authorization code and fetches users username
                auth.username = await fetchSpotifyUserName(auth)
                setAuthorization(auth)

                console.log(auth)

            //set timer to clear authorization key when it has expired 
                setTimeout(() => {
                window.history.replaceState({}, "", window.origin) 
                setAuthorization({})
                console.log("timed Out")
            }, auth.expires_in)
            }
            fetchData()
    },[])  
       
    function addToPlayListHandler(obj){

        setListOfSongs((prev) => [...prev, obj])
    }

    function removeFromPlayListHandler({id}){
        setListOfSongs((prev) => prev.filter((obj) => obj.id !== id))
    }

    //set tracks array from searchBar
    function spotifyListHandler(list){

        setSpotifyList(list)
    }
    async function handlePlayListSubmit(playListName){

        const playListObj = await spotifyMakePlayList(authorization, playListName)

        const tracksAdded = await spotifyAddTracksToPlayList(playListObj, authorization, listOfSongs)

        if (tracksAdded.snapshot_id){
            setListOfSongs([])
        }
    }

    return (
        <>
            <SearchContainer authorization={authorization} spotifyListHandler={spotifyListHandler}/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                margin: '2% 5%'
            }}>
                <TrackListContainer listHandler={addToPlayListHandler} spotifyList={spotifyList}/>
                <PlayList listOfSongs={listOfSongs} listHandler={removeFromPlayListHandler} handlePlayListSubmit={handlePlayListSubmit}/>
            </div>
            
            
        </>
    )
}

export default App