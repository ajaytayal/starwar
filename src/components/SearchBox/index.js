import React from "react";
import ReactDOM from "react-dom";

import SearchBox from './SearchBox.js';
export default class SearchComponent extends React.Component{
  render(){
    return (
      <div>
        <h2 className="Login">Search</h2>
        <SearchBox />
      </div>
    )
  }
}