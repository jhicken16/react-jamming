import {useState} from 'react';
import Track from '../../track/TrackComponents'

function PlayList({listOfSongs, listHandler}){

    const [playListTitle, setPlayListTitle] = useState('')
    
    function handlePlayListTitle(e){
        e.preventDefault()
        setPlayListTitle(e.target.value)
    }

    return (
        <div>
            <form>
                <input type="text" onChange={(handlePlayListTitle)}/>
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