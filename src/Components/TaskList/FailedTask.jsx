import React from 'react'

const FailedTask = () => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl '>
    <div className='flex justify-between p-5 items-center'>
    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
    <h4 className='text-sm'>20 feb 2024</h4>
    </div>
    <h2 className='mt-1 text-xl font-semibold m-5'> Maka a Youtube video</h2>
    <p className=' text-sm m-5 '> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    <div className='flex justify-between  mt-4 m-3 '>
    <button className='bg-green-500 py-1 text-sm px-2'>Mark as Completed</button>
    <button className='bg-red-500 py-1 text-sm px-2' >Mark as failed</button>
 </div>
 </div>
  )
}

export default FailedTask
