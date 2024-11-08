import React, { useState } from 'react'


const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')
    const [newTask, setNewTask] = useState({})

    

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask:true, failed:false, completed: false })
       const data=  JSON.parse(localStorage.getItem('employees'))

       data.forEach(function(elm){
      if(asignTo == elm.firstname){
        elm.tasks.push(newTask)
        console.log(elm)
      }
      localStorage.setItem('employees',JSON.stringify(data))
       })
    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e) => {
                handleSubmit(e)
            }} className='flex items-start flex-wrap w-full items justify-between'>

                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Make a Ui design'
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value);
                            }}
                        />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='Date' placeholder='Make a Ui design'
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value);
                            }}
                        />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Make a Ui design'
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value);
                            }}
                        />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Make a Ui design'
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value);
                            }}
                        />
                    </div>

                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name='' id=' ' cols='30' rows='10'
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value);
                        }}
                    ></textarea>

                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 mt-8 p-3 rounded w-full'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask
