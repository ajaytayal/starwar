import React from "react";
import ReactDOM from "react-dom"
import {connect} from "react-redux";

@connect((store) => {
  return {
    users: store.userReducer.users,
  }
})
 
export default class Login extends React.Component{
	
	constructor(props) {
    	super(props);
    	this.state = {username: '', pass:'', error:''};
    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		
		this.setState({
		  [name]: value
		});
	}

	handleSubmit(event) {
	var users = this.props.users;
		for(var i=0; i<users.length; i++){
			var user = users[i];
			if(user.name == this.state.username && user.birth_year == this.state.pass){
				location.href = ('/search');
				break;
			}else{
				this.setState({error:'Either Username or Password is incorrect'})
			}	
		}
		event.preventDefault();
	}
  
  render(){
    return (
      <form method="get" action="" name="login" onSubmit = {this.handleSubmit}>
        <input type="text" name="username" placeholder="Please type username" value={this.state.value} onChange={this.handleChange} className="text"/>
		<input type="password" name="pass" placeholder="Please type password" value={this.state.password} onChange={this.handleChange} className="text"/>
		<div className="error">{this.state.error}</div>
        <input type="submit" value="Login"  />
      </form>
    )
  }
}