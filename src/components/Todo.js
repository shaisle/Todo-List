import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function Todo({ todo, toggleComplete, removeTodo, onDragEnd }) {
  // this function will call togglecomplete with the id of the todo passed in
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  // this function will call removeTodo which we will attach onto a button via the onlcick property
  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  // cannot return multiple elemtns at once from a react component
  // React transpiles for us, turns our jsx code to nested react.createlement calls
  // so we wrapp everything in a single div
  return (
    // we can attach custom styles to elements in react by specifying "style" prop
    // div will be given flex display to align items horizontally

    // we also add style property to li tag to give it the color and text decoration, which will put a line through it when task is compelted
    // checkbox is given onclick property to invoke handlecheckboxclick

    // replace the div tag with a ListItem component
    // replace the li tag with Typography component
    // replace input tag with checkbox component
    // replace button tag with iconbutton component
    // replace x inner html with closeicon component
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}
// check box
// task
// submit button

export default Todo;
