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
    <div className="flex items-center">
    <input
        type="text"
        placeholder="Enter Your Task name"
        value={props.inputString}
        onChange={(e) => {
          props.setInputString(e.target.value);
        
        }}
        className="border border-black px-2 py-1 mr-2"

      />
      <button className="bg-black text-white px-2 py-1" onClick={onClickHandler}>Add Task</button>
      
    </div>
    
    </>
  );
};
