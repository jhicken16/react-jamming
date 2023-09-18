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


    return (
        <>
            <SearchContainer />
            <TrackListContainer addToPlayListHandler={addToPlayListHandler}/>
            <PlayList listOfSongs={listOfSongs}/>
        </>
    )
}

export default App