import React from 'react';
import Track from '../../track/TrackComponents'

function TrackListComponent({addToPlayListHandler}){
    const arr= ['song1', 'song2', 'song3'];

    return (
        <ul>
            {
                arr.map((x) => {
                    //pass key to component
                    return <Track key={x} value={x} addToPlayListHandler={addToPlayListHandler}/>
                })
            }
        </ul>
    )
}
export default TrackListComponent