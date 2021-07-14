import React, { useEffect, useState } from "react";
import {
  getAllTodos,
  getById,
  createTodo,
  removeTodo
} from "../../../src/Common/Services/TodolistService";
import HideForm from "./HideForm";

/* STATEFUL PARENT COMPONENT */
const MainList = () => {
  // Variables in the state to hold data
  const [todos, setTodos] = useState([]);
  // const [todo, setTodo] = useState([]);
  const [name, setName] = useState();

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    getAllTodos().then((todos) => {
      console.log(todos);
      setTodos(todos);
    });

    // getById("iMnRXuVnUU").then((todo) => {
    //   console.log(todo);
    //   setTodo(todo);
    // });
  }, []);

  // Flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState("");

  // UseEffect that runs when changes
  // are made to the state variables/flags
  useEffect(() => {
    // Check for add flag and make sure name state variable is defined
    if (name && add) {
      createTodo(name).then((newTodo) => {
        setAdd(false);
        // Add the newly created todo to the todos array
        // to render the new list of todos (thru spread/concatination)
        setTodos([...todos, newTodo]);

        //Note: CANNOT MANIPULATE STATE ARRAY DIRECTLY
        //todos = todos.push(todo)
        //setTodos(todos)
      });
    }

    // Check if remove state variable is holding an ID
    if (remove.length > 0) {
      //Filter the old todos list to take out selected todo
      const newTodos = todos.filter((todo) => todo.id !== remove);
      setTodos(newTodos);

      removeTodo(remove).then(() => {
        console.log("Removed todo with ID: ", remove);
      });
      // Reset remove state variable
      setRemove("");
    }
  }, [name, todos, add, remove]);

  // Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    e.preventDefault();
    // Trigger add flag to create todo and
    // re-render list with new todo
    setAdd(true);
  };

  // Handler to track changes to the child input text
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // Continuously updating name to be added on submit
    setName(e.target.value);
  };

  return (
    <div>
      <hr />
      This is the main list parent component. Timothy is offline during the
      following time:
      <div>
        {todos.length > 0 && (
          <ul>
            {todos.map((todo) => (
              <div>
                <span>
                  {/* Using getter for todo Object to display name */}
                  <li key={todo.id}>Occupied between: </li>{" "}
                  <li key={todo.id + '2'}>
                    Started from: {todo.get("startTime").toLocaleString()}
                  </li>{" "}
                  <li key={todo.id + '3'}>
                    End at: {todo.get("endTime").toLocaleString()}
                  </li>{" "}
                  <br />
                  {/* Button with inline click handler to obtain 
                  instance of todo for remove state variable*/}
                </span>
              </div>
            ))}
          </ul>
        )}
      </div>
      {/* Stateless Child component passing up events from form */}
      <HideForm onClick={onClickHandler} onChange={onChangeHandler} />
    </div>
  );
};

export default MainList;
