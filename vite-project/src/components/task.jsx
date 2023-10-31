import { useState } from 'react'

export const Task = () => {
    const [addTask,setTask]=useState([]);
    const addNameHandler=()=>{
       const inputName=document.getElementById("name").value
       console.log("first inputName",inputName)
      setTask([...addTask,{task:inputName}])
       console.log("setter variable",addTask)


    }
    
  return (
    <div>
        <input type="text" id="name"/>
        <button onClick={addNameHandler}>
            Add Task Name
        </button>
       {addTask.map((items,index)=>{   
        return(
            <div key={index}>
            <h3>{items.task}</h3>
        </div>
        )
       })}
    </div>
  )
}
