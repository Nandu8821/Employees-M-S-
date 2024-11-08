import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className=' flex-shrink-0 h-full w-[300px] bg-red-600 rounded-xl '>
            <div className='flex justify-between p-5 items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-1 text-xl font-semibold m-5'> {data.taskTitle}</h2>
            <p className=' text-sm m-5 '> {data.taskDescription}</p>

            <div className='flex justify-center  mt-4 m-3 '>
            <button className='bg-green-500 py-1 text-sm px-5 '> Completed</button>

         </div>
        </div>
    )
}

export default CompleteTask
