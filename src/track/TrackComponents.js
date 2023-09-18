import React from 'react'


function Track(props){

    //to get props past to PlayList well will have to call this function in the parent an pass it vire props
    console.log(props.value)

    return (
       <div>
        <h1>{props.value.song}, {props.value.artist}, {props.value.album}</h1>
        <button value={props.value} onClick={() => {props.addToPlayListHandler(props.value)}}>+</button>
       </div>    
    )
}
export default Track