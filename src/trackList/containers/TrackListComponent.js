import React from 'react';
import Track from '../../track/TrackComponents'

function TrackListComponent({addToPlayListHandler}){
    const arr= [{song: "song1", artist: "artist1", album: "album1"}, {song: "song2", artist: "artist2", album: "album2"}, {song: "song3", artist: "artist3", album: "album3"}];

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