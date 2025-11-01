import React from 'react'

const rightcardcontent = (props) => {
  return (
         <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
              <h2 className='bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
              <div>
                  <p className='text-white font-bold mb-10'>{props.intro}</p>
                  <div className='flex justify-between'>
                      <button style={{background:props.color}}className=' text-white font-semibold px-4 py-1.5 rounded-full mt-5'>{props.tag}</button>
                      <button style={{background:props.color}}className=' text-white font-semibold px-2 py-1.5 rounded-full mt-5'><i className="ri-arrow-right-line"></i></button>
                    </div>
              </div>
          </div>
  )
}

export default rightcardcontent
