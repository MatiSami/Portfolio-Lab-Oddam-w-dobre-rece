import React, {Component} from 'react';
import {
    Link
  } from 'react-router-dom';

class Register extends Component {
  render(){
    return (
        <>
           <h1>Register</h1>
           <Link to="/">Powrót do strony głównej</Link> 
           </>
    )
  }
}


export default Register;