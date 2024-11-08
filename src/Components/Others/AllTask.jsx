import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext)
    
    return (


        <div className='bg-[1c1c1c] p-5 mt-5  rounded'>

            <div className='bg-red-400  mb-2  py-2 px-4 flex justify-between'>
                <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5 '>New Task </h3>
                <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                <h5 className='text-lg font-medium w-1/5'>Failed</h5>
            </div>


            <div className=' overflow-auto'>
                {
                    authData.employees.map((elm,index) => {
                        
                        return <div className='bg-yellow-900  mb-2  py-2 px-4 flex justify-between' >
                            <h2  className='text-lg font-medium w-1/5 '>{elm.firstname}</h2>
                            <h3 className='text-lg font-medium w-1/5  text-blue-300'>{elm.taskNumbers.newTask}</h3>
                            <h5 className='text-lg font-medium w-1/5 text-yellow-600'>{elm.taskNumbers.active}</h5>
                            <h3 className='text-lg font-medium w-1/5 text-green-600'>{elm.taskNumbers.completed} </h3>
                            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elm.taskNumbers.failed}</h5>
                        </div>
                    })
                }
            </div>


        </div>
    )
}

export default AllTask
