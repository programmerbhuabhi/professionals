import React from 'react'
import Rightcardcontent from './rightcardcontent'
const rightcard = (props) => {
  return (
    <div className='h-full overflow-hidden relative w-1/3 rounded-3xl shrink-0'>
          <img className='h-full w-full object-cover rounded-3xl' src={props.img} alt="" />
          <Rightcardcontent intro={props.intro} tag={props.tag} color={props.color} id={props.id}/>
    </div>
  )
}

export default rightcard
