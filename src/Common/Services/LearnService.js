// import React from "react";
import axios from "axios";

const url = "https://my-json-server.typicode.com/TimrayZ/demo";

// const url = "http://localhost:3004";

export const createUser = (id, firstName, lastName, email, password) => {
  return axios({
    method: "post",
    url: `${url}/users`,
    data: {
      id,
      firstName,
      lastName,
      email,
      password
    },
    headers: {
      "Content-Type": "application/json"
    },
    json: true
  })
    .then((response) => {
      console.log("POST response: ", response);
    })
    .catch((err) => {
      console.log("POST error: ", err);
    });
};

export const getAllUsers = () => {
  return axios
    .get(`${url}/users`)
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      // console.log("GET Error: ", err);
    });
};
