import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// CREATE operation - new todo with Name
export const createTodo = (Name) => {
  console.log("Creating: ", Name);
  const Todo = Parse.Object.extend("Todo");
  const todo = new Todo();
  // using setter to UPDATE the object
  todo.set("name", Name);
  return todo.save().then((result) => {
    // returns new Todo object
    return result;
  });
};

// READ operation - get todo by ID
export const getById = (id) => {
  const Todo = Parse.Object.extend("Todo");
  const query = new Parse.Query(Todo);
  return query.get(id).then((result) => {
    // return Todo object with objectId: id
    return result;
  });
};

// READ operation - get all todos in Parse class Todo
export const getAllTodos = () => {
  const Todo = Parse.Object.extend("Todo");
  const query = new Parse.Query(Todo);
  return query.find().then((results) => {
    // returns array of Todo objects
    return results;
  });
};

// DELETE operation - remove todo by ID
export const removeTodo = (id) => {
  const Todo = Parse.Object.extend("Todo");
  const query = new Parse.Query(Todo);
  return query.get(id).then((todo) => {
    todo.destroy();
  });
};
