import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// we will be using this global local storage variable to store our todos
const LOCAL_STORAGE_KEY = "react-todo-list-items";

function App() {
  const [todos, setTodos] = useState([]);

  // this useEffect will render the todositems that currently exist within storage
  useEffect(() => {
    // we use json.parse to store the local storage key into our storagetodos variable
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // use if statement to check if our variable is null or not
    if (storageTodos) {
      // if our storageTodos is not null, we call setTodos passing in storageTodos
      // setTodos will then populate our state with the todos that were previously stored
      setTodos(storageTodos);
    }
  }, []);

  // useEffect will take in two parameters, a call back and a dependencyarray
  // array is used to determine if effect is fired off
  // if one or more elements int he array are changed, effect will be fired
  // if array is empty, effect will fire only after the component is initially rendered
  useEffect(() => {
    // setItem takes two parameters, keyname and keyvalue, and will add them to eht storage object
    //
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // takes in todo and adds it to the array of todos
  function addTodo(todo) {
    // to add the Todo to the list, create new todos array by calling setTodos
    // the todo that is passed in as the initial argument gets set as the first element in this array
    // and all of the old todos are spread over it as the rest of the leements
    setTodos([todo, ...todos]);
  }

  // this is to update our todos
  function toggleComplete(id) {
    // call settodos by passing in another todos array by performing another map
    setTodos(
      // map over each todo and check if the id of the todo matches the id that was passed in
      // if it does match, returns new object with completed property negated, toggles false to true and true to false
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    // calls setTodos to remove a single todo from the todos array
    // filter method on our todos array KEEPS all of the elements that do NOT have the selected ID
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // addTodo function is now being passed into TodoForm as a prop
  // in react, props are unidirectional data, parent component is passing it into child
  //
  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        Git'er Done
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
