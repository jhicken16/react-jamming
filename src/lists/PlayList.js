import {useState} from 'react';
import Track from '../track/TrackComponents'
import './list.css'
import '../conformStyles/title.css'
import '../conformStyles/inputFeild.css'
import '../conformStyles/button.css'

function PlayList({listOfSongs, listHandler, handlePlayListSubmit}){

    const [playListTitle, setPlayListTitle] = useState('')
    
    function handlePlayListTitle(e){
        e.preventDefault()
        setPlayListTitle(e.target.value)
    }


    return (
        <div className='listContainer playlist'>
            <form>
                <label className='title' htmlFor="playListName">play list name:</label>
                <input className='searchBar' id="playListName" type="text" onChange={(handlePlayListTitle)}/>
            </form>
            
            <ul id="playListSongs">
            {
                listOfSongs.map(element => {
                    console.log(element)
                    return <Track key={element} value={element} listHandler={listHandler}/>
                })
                
            }
            </ul>
            <button className='button-77' onClick={() => handlePlayListSubmit(playListTitle)}>save To spotify</button>
        </div>
        
    )
}
export default PlayList