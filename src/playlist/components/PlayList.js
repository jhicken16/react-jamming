import {useState} from 'react';
import Track from '../../track/TrackComponents'

function PlayList({listOfSongs, listHandler, handlePlayListSubmit}){

    const [playListTitle, setPlayListTitle] = useState('')
    
    function handlePlayListTitle(e){
        e.preventDefault()
        setPlayListTitle(e.target.value)
    }


    return (
        <div>
            <form>
                <label htmlFor="playListName">play list name:</label>
                <input id="playListName" type="text" onChange={(handlePlayListTitle)}/>
                <button onClick={() => handlePlayListSubmit(playListTitle)}>save To spotify</button>
            </form>
            
            <ul id="playListSongs">
            {
                listOfSongs.map(element => {
                    console.log(element)
                    return <Track key={element} value={element} listHandler={listHandler}/>
                })
                
            }
            </ul>
        </div>
        
    )
}
export default PlayList