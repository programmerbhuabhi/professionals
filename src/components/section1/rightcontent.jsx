import React from 'react'
import Rightcard from './rightcard'
const rightcontent = (props) =>{
    return(
      <div id='right'className='h-full w-7/10 flex flex-nowrap gap-3 overflow-x-auto'>
            {props.users.map(function (elem,idx)
            {
                return <Rightcard img={elem.img} id={idx} intro={elem.intro} tag={elem.tag} color={elem.color}/>
                        
            })}
    </div>
   )
}

export default rightcontent
