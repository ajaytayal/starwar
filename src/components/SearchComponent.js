import React from "react";
import ReactDOM from "react-dom";
 
import {connect} from "react-redux";
import SearchBox from './SearchBox';
 
import {searchPlanets} from "../actions/searchActions.js"
@connect((store) => {
//  console.log("ins store",store.userReducer.users);
  return {
	searches: store.searchReducer.searches
  }
})
export default class Search extends React.Component{
	constructor(props){
		super(props);
	}
  componentWillMount(){
	  if(!this.props.searches.length)
	  this.props.dispatch(searchPlanets());
  }
 
  render(){
//    console.log(this.props.users);
    return (
      <div>
	  	<SearchBox />
      </div>
    )
  }
}