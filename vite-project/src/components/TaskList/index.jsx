// TaskList.js

import { Checkbox } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useState ,useEffect} from "react";

export const TaskList = (props) => {
  const [searchItem,setSearchItem]=useState(props.task);


  const handleCheckboxChange = (index) => {
    const updatedTasks = [...props.task];
    updatedTasks[index].isChecked = !updatedTasks[index].isChecked;
    props.setTask(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...props.task];
    updatedTasks.splice(index, 1);
    props.setTask(updatedTasks);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };
  useEffect(() => {
    if (props.inputString) {
      const filterSearch = props.task.filter(item => {
        return item.task.toLowerCase().includes(props.inputString.toLowerCase());
      });
      setSearchItem(filterSearch);
    } else {
      setSearchItem(props.task); // Reset search results when search string is empty
    }
  }, [props.inputString, props.task]);
  

  return (
    <div>
      {searchItem.map((item, index) => {
        return (
          <div key={index}  className=" flex gap-5 border border-black px-2 py-1 mr-2 place-items-center">
            <h3 className={`text-3xl font-bold ${item.isChecked===true ? "text-green-500" : "text-red-500"}`}>
              {item.task}
            </h3>
            <Checkbox
              color="indigo"
              checked={item.isChecked}
              onChange={() => handleCheckboxChange(index)}
              className="mt-2"
            />
            <Button className="bg-black text-white px-2 py-1" onClick={() => handleDeleteTask(index)}>Delete Task</Button>
          </div>
        );
      })}
    </div>
  );
};
