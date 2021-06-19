import React from "react";
import Todo from "./Todo";
import { List } from "@material-ui/core";

// destructure todos fromthe components prop into an unordered list
// destructure togglecomplete from props
// destructure removeTodo from props
function TodoList({ todos, toggleComplete, removeTodo, onDragEnd }) {
  // Map over todos
  // Inside map pass in Todo object as a prop
  // When you render a JSX element from an array map, each element should have a unique key attached to the parent element returned from the map
  // pass in togglecomplete and removetodo as another prop on our Todo component
  //

  // replace our ul tag with the list component from material ui
  return (
    <List>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          onDragEnd={onDragEnd}
        />
      ))}
    </List>
  );
}

export default TodoList;
