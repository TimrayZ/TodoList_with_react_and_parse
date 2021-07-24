import React, { useEffect, useState } from "react";
import {
  getAllTodos,
  getById,
  createTodo,
  removeTodo
} from "../../../src/Common/Services/TodolistService";
import MainForm from "./MainForm";

/* STATEFUL PARENT COMPONENT */
const MainList = () => {
  // Variables in the state to hold data
  const [todos, setTodos] = useState([]);
  // const [todo, setTodo] = useState([]);
  const [name, setName] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

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
      createTodo(name, startTime, endTime).then((newTodo) => {
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
  }, [name, startTime, endTime, todos, add, remove]);

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

  const onStChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // Continuously updating name to be added on submit
    setStartTime(new Date(e.target.value));
  };

  const onEdChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // Continuously updating name to be added on submit
    setEndTime(new Date(e.target.value));
  };

  return (
    <div>
      <hr />
      <h3>Host schedule</h3>
      Current time offset at your timezone:{" "}
      {new Date().getTimezoneOffset() / 60} Hours
      <div>
        {todos.length > 0 && (
          <ul>
            {todos.map((todo) => (
              <div>
                <span>
                  {/* Using getter for todo Object to display name */}
                  <li key={todo.id}>Task: {todo.get("name")}</li>{" "}
                  <li key={todo.id + "4"}>
                    Created by: {todo.get("userFirstName")}{" "}
                    {todo.get("userLastName")}
                  </li>{" "}
                  <li key={todo.id + "2"}>
                    Started from: {todo.get("startTime").toLocaleString()}
                  </li>{" "}
                  <li key={todo.id + "3"}>
                    End at: {todo.get("endTime").toLocaleString()}
                  </li>{" "}
                  {/* Button with inline click handler to obtain 
                  instance of todo for remove state variable*/}
                  <button
                    onClick={(e) => {
                      // Set remove variable and trigger re-render
                      setRemove(todo.id);
                    }}
                  >
                    Delete the item
                  </button>
                </span>
                <br />
              </div>
            ))}
          </ul>
        )}
      </div>
      {/* <div>
        <p> Todo by ID: </p>
        {Object.keys(todo).length > 0 && (
          <ul>
              {todos.map((todo) => (
              <li key={"1" + todo.id}> {todo.id} </li>
            ))}
          </ul>
        )}
      </div> */}
      {/* Stateless Child component passing up events from form */}
      <MainForm
        onClick={onClickHandler}
        onChange={onChangeHandler}
        onStChange={onStChangeHandler}
        onEdChange={onEdChangeHandler}
      />
    </div>
  );
};

export default MainList;
