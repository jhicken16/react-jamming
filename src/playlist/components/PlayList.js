
import Track from '../../track/TrackComponents'

function PlayList({listOfSongs}){


    return (
        <div>
            <input type="text" />
            <ul id="playListSongs">
            {
                listOfSongs.map(element => {
                    return <Track key={element} value={element}/>
                })
                
            }
            </ul>
        </div>
        
    )
}
export default PlayList