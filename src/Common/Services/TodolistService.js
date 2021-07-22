import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// CREATE operation - new todo with Name
export const createTodo = (Name, StartTime, EndTime) => {
  console.log("Creating: ", Name);
  const Todo = Parse.Object.extend("Todo");
  const todo = new Todo();
  //setting private property:
  const postACL = new Parse.ACL(Parse.User.current());
  postACL.setPublicReadAccess(true);
  postACL.setWriteAccess("HKEqxS6elv", true);//host can modify all options
  todo.setACL(postACL);

  // using setter to UPDATE the object
  todo.set("name", Name);
  todo.set("startTime", new Date(StartTime));
  todo.set("endTime", new Date(EndTime));

  Parse.User.enableUnsafeCurrentUser();
  const currentUser = Parse.User.current();
  todo.set("user", currentUser)
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
