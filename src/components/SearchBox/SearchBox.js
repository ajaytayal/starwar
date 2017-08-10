import React from "react";
import ReactDOM from "react-dom"
import {connect} from "react-redux";
import DisplayContent from "./DisplaySearchResult.js"

@connect((store) => {
  return {
    searches: store.searchReducer.searches
  }
})

 
export default class Search extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {username: '', pass:'', searchData:[]};
	    this.handleChange = this.handleChange.bind(this);
  	}

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
	var filteredData = [];
	var popu = 0;
	var maxValue = 0;
	var maxValueIndex = 0;
	this.props.searches.map((search) => {
		if(value && search.name.toLowerCase().indexOf(value)>-1){
			filteredData.push({name:search.name, population:search.population})
		}
	})
	for(var i=0; i<filteredData.length; i++){
		if(filteredData[i].population == 'unknown')
		popu = 0;
		else
		popu = parseInt(filteredData[i].population)
		if (popu > maxValue) {
		  maxValue = popu
		  maxValueIndex = i;
		}
	}
	if(filteredData.length){
		filteredData[maxValueIndex]['highest'] = 'showBig';
	}
	this.setState({
	  searchData: filteredData
	});

  }
  
  renderResults() {
        if (this.state.searchData.length) {
            return (
                <DisplayContent data={this.state.searchData}/>
            );
        }
    }

  render(){
    return (
      <form method="get" action="" name="search">
        <input type="text" placeholder="Search" className="text"  value={this.state.value} onChange={this.handleChange} />
		{this.renderResults()}
      </form>
    )
  }
}