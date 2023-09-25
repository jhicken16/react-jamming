import React from 'react';
import Track from '../../track/TrackComponents'

function TrackListComponent({listHandler, spotifyList}){
    console.log(spotifyList)

    return (
        <ul>
            {
                spotifyList.map((x) => {
                    //pass key to component
                    return <Track key={x.id} value={x} listHandler={listHandler}/>
                })
            }
        </ul>
    )
}
export default TrackListComponent