import React from "react";
import ReactDOM from "react-dom";
 
import {connect} from "react-redux";
import LoginForm from './login/index.js'
 
import {fetchUsers} from "../actions/userActions.js"
@connect((store) => {
//  console.log("ins store",store.userReducer.users);
  return {
    users: store.userReducer.users,
  }
})
 
export default class Main extends React.Component{
		constructor(props){
		super(props);
	}

  componentWillMount(){
  	  if(!this.props.users.length)
      this.props.dispatch(fetchUsers());
  }
  
  render(){
    return (
      <div>
      <div>Starwar</div>
	  	<LoginForm users = {this.props.users} />
      </div>
    )
  }
}