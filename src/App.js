import React, {useState, useEffect} from 'react'

import SearchContainer from './search/containers/SearchContainer.js'
import TrackListContainer from "./trackList/containers/TrackListComponent"
import PlayList from './playlist/components/PlayList'
import authorize from './authorize.js'

function App(){

    //going to have to put a uri in this is what spotify uses to track songs.
    //playList songs
    const [listOfSongs, setListOfSongs] = useState([])

    //Authorization contains object with peramitors for accessing spotify api
    const [authorization, setAuthorization] = useState({})

    //get trackList form search and send to trackList
    const [spotifyList, setSpotifyList] = useState([])

    useEffect(() => {
            const fetchData = async () => {
                const auth = await authorize()
                setAuthorization(auth)

                console.log(auth)

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
        console.log(listOfSongs)
    }

    function removeFromPlayListHandler({song}){
        setListOfSongs((prev) => prev.filter((obj) => obj.song !== song))
    }

    //set tracks array from searchBar
    function spotifyListHandler(list){
        setSpotifyList(list)
    }

    return (
        <>
            <SearchContainer authorization={authorization} spotifyListHandler={spotifyListHandler}/>
            <TrackListContainer listHandler={addToPlayListHandler} spotifyList={spotifyList}/>
            <PlayList listOfSongs={listOfSongs} listHandler={removeFromPlayListHandler}/>
            
        </>
    )
}

export default App