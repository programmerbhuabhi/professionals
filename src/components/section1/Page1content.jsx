import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'
const Page1content = (props) => {
  return (
    <div className='pb-10 px-18 flex items-center gap-10 h-[90vh]'>
      <Leftcontent />
      <Rightcontent users={props.users}/>
    </div>
  )
}

export default Page1content
