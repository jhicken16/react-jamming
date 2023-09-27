import React from 'react';
import Track from '../track/TrackComponents'
import './list.css'

function TrackListComponent({listHandler, spotifyList}){
    console.log(spotifyList)

    return (
        <div className='listContainer'>
            <ul>
                {
                    spotifyList.map((x) => {
                        //pass key to component
                        return <Track key={x.id} value={x} listHandler={listHandler}/>
                    })
                }
            </ul> 
        </div>
        
    )
}
export default TrackListComponent