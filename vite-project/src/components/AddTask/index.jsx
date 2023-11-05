// AddTask.js

export const AddTask = (props) => {
  const onClickHandler = () => {
    const updatedTasks = [...props.task, { task: props.inputString, isChecked: false }];
  props.setTask(updatedTasks);
  props.setInputString("");

  // Save updated tasks to local storage
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));

  };

  return (
    
    <>
 
    <div >
      
    <input
        type="text"
        placeholder="Enter Your Task name"
        value={props.inputString}
        onChange={(e) => {
          props.setInputString(e.target.value);
        
        }}
        className="border-2 border-black px-2 py-1 my-4 mx-4 shadow-md rounded-full"

      />
      <button className="bg-blue-600 text-white px-4 py-1 rounded-lg border-2 border-black" onClick={onClickHandler}>Add Task</button>
      
    </div>
    
    </>
  );
};
