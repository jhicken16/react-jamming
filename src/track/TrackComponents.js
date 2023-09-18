import React, {useRef} from 'react'


function Track(props){

    //to get props past to PlayList well will have to call this function in the parent an pass it vire props

    return (
       <div>
        <h1>{props.value}</h1>
        <button value={props.value} onClick={props.addToPlayListHandler}>+</button>
       </div>    
    )
}
export default Track