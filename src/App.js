import React, {useState, useEffect} from 'react'

import SearchContainer from './search/containers/SearchContainer.js'
import TrackListContainer from "./trackList/containers/TrackListComponent"
import PlayList from './playlist/components/PlayList'
import authorize from './authorize.js'

function App(){

    //going to have to put a uri in this is what spotify uses to track songs.
    const [listOfSongs, setListOfSongs] = useState([])

    //Authorization contains object with peramitors for accessing spotify api
    const [authorization, setAuthorization] = useState({})

    useEffect(() => {
        setAuthorization(authorize())
    }, [])
    console.log(authorization.expires_in)


    setTimeout(() => {
         window.history.replaceState({}, "", window.origin) 
         setAuthorization({})
         console.log("timed Out")
    }, authorization.expires_in)
       
    function addToPlayListHandler(obj){
        setListOfSongs((prev) => [...prev, obj])
        console.log(listOfSongs)
    }

    function removeFromPlayListHandler({song}){
        setListOfSongs((prev) => prev.filter((obj) => obj.song !== song))
    }

    return (
        <>
            <SearchContainer />
            <TrackListContainer listHandler={addToPlayListHandler}/>
            <PlayList listOfSongs={listOfSongs} listHandler={removeFromPlayListHandler}/>
            
        </>
    )
}

export default App