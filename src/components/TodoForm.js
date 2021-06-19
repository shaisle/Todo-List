import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, TextField } from "@material-ui/core";

// addTodo function is destructured from the props parameter
function TodoForm({ addTodo }) {
  // todo === state
  // setTodo = function intialized with 3 properties
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  // takes in evetn as parameter
  // updates task property on todo object
  function handleTaskInputChange(e) {
    // pass in new object with old todo property spready onto it"..."
    // then update task property with new value from e.target.value
    setTodo({ ...todo, task: e.target.value });
  }

  // add the todos from the state to the actual list
  function handleSubmit(e) {
    // prevent browser default form functionality
    e.preventDefault();
    // if statement checks if the tasks property on our todo is not empty
    if (todo.task.trim()) {
      // addTodo has our object spread onto it with the ids added with uuid
      addTodo({ ...todo, id: uuidv4() });
      // reset task input and spreads the old todo property onto our object
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    // handleTaskInputChange will fire every  time input is changed
    // value of input is set to task of the todo because that is what being updated every time handletaskinput change is called

    // using materialui textfield and button to replace the input and button tags
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">submit</Button>
    </form>
  );
}

export default TodoForm;
