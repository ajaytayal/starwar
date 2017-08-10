import React from "react";
import ReactDOM from "react-dom";
 
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
 
import {fetchUsers} from "../actions/userActions.js"
import {searchPlanets} from "../actions/searchActions.js"
@connect((store) => {
  return {
    users: store.userReducer.users,
	searches: store.searchReducer.searches
  }
})
 
export default class Main extends React.Component{
	constructor(props){
		super(props);
  }
  componentWillMount(){
	  if(!this.props.users.length)
      this.props.dispatch(fetchUsers());
	  if(!this.props.searches.length)
      this.props.dispatch(searchPlanets());
  }
 
  render(){
    return (
      <ul className="links">
	  	<li><Link to='/login'>Login</Link></li>
		<li><Link to='/search'>Search</Link></li>
      </ul>
    )
  }
}