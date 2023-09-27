import React from 'react'
import './track.css'
import '../conformStyles/button.css'

function Track(props){

    //to get props past to PlayList well will have to call this function in the parent an pass it vire props
    console.log(props)

    return (
       <div className='trackItem'>
        <p className='songInfo'>{props.value.name} | {props.value.artist} | {props.value.album}</p>
        <button className='button-77' value={props.value} onClick={() => {props.listHandler(props.value)}}>+</button>
       </div>    
    )
}
export default Track