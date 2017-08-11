import React from "react";
import ReactDOM from "react-dom";



import LoginFormComponent from './loginForm.js';
export default class LoginForm extends React.Component{
	constructor(props){
		super(props);
	}
  render(){
    return (
      <div>
        <h2>Login details</h2>
        <LoginFormComponent users = {this.props.users} />
      </div>
    )
  }
}