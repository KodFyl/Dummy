import axios from 'axios';

import {
    GET_ERRORS,
    SET_CURRENT_USER,
} from "./types";


//Registration_______________________________________________________________________________________________________

export const registerUser = (userData, history) => dispatch => {
    axios
      .post("http://ec2-18-221-51-201.us-east-2.compute.amazonaws.com:5000/api/users/register", userData)
      .then(res => {
        console.log("Registration Successfull.")
        history.push("/registered")
      })
      .catch(err => 
        { 
          console.log("Registration: Error occured!", err)
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          })
        }
      );
}


//Login______________________________________________________________________________________________________________

export const loginUser = (userData, history) => dispatch => {
  axios
    .post("http://ec2-18-221-51-201.us-east-2.compute.amazonaws.com:5000/api/users/login", userData)
    .then(res => { 
      dispatch({
        type: SET_CURRENT_USER,
        payload: res.data
      });
      history.push('/dashboard');
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
  
}

