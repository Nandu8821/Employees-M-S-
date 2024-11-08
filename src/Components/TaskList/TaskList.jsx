import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {


    
    return (
        <div id='tasklist' className=' h-[300px] overflow-x-auto flex items-center justify-start gap-5 py-5 w-full mt-10'>
                  {
                    data.tasks.map((elem,index)=>{
                        
                        if(elem.completed){
                            return <CompleteTask key={index} data={elem} />
                        }
                        
                        if(elem.newTask){
                            return <NewTask key={index} data={elem} />
                        }
                        if(elem.active){
                            return <AcceptTask key={index} data={elem} />
                        }

                        if(elem.failed){
                            return <FailedTask key={index} data={elem} />
                        }
                    })
                  }
        </div>
    )
}

export default TaskList
