import React, {useState} from 'react'

import SearchContainer from './search/containers/SearchContainer.js'
import TrackListContainer from "./trackList/containers/TrackListComponent"
import PlayList from './playlist/components/PlayList'

function App(){

    const [listOfSongs, setListOfSongs] = useState([])

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