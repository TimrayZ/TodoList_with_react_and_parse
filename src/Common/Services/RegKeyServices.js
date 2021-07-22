import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

//RegKey values are used when registering. A new user can only be created with a registration key.

// READ operation - get regkey by ID
export const getById = (id) => {
  const RegKey = Parse.Object.extend("RegKey");
  const query = new Parse.Query(RegKey);
  return query.get(id).then((regKey) => {
    // return Todo object with objectId: id
    return regKey.get('key');
  });
};

// // READ operation - get all todos in Parse class Todo
// export const getAllTodos = () => {
//   const Todo = Parse.Object.extend("Todo");
//   const query = new Parse.Query(Todo);
//   return query.find().then((results) => {
//     // returns array of Todo objects
//     return results;
//   });
// };

// // DELETE operation - remove todo by ID
// export const removeTodo = (id) => {
//   const Todo = Parse.Object.extend("Todo");
//   const query = new Parse.Query(Todo);

//   return query.get(id).then((todo) => {
      
//     todo.destroy();
//   });
// };
