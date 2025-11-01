import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const App = () => {
  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661576762314-388502b67042?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsJTIwb2NjdXBhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
      intro: 'Innovation distinguishes between a leader and a follower Steve Jobs The way to get started is to quit',
      tag: 'Satisfied',
      color: 'blue'
    },
    {
      img: 'https://images.unsplash.com/photo-1743175129533-1a59b078804f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGl0JTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
      intro: 'The best customer service is when end users donot need to reach out to the help desk." Nishant Rao',
      tag: 'UnderServed',
      color: 'red'
    },
    {
      img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXQlMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
      intro: 'Success is not final; failure is not fatal: It is the courage to continue that counts." Unknown',
      tag: 'UnderBanked',
      color: 'Pink'
    },
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
      intro: '"The best customer service is when end users don’t need to reach out to the help desk." – Nishant Rao',
      tag: 'UnderPower',
      color: 'Orange'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App
