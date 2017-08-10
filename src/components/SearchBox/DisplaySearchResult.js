import React from "react";
import ReactDOM from "react-dom"

export default class DisplaySearchResult extends React.Component{
	constructor(props) {
    	super(props);
	}
	
	SearchList(ListItems) {
		var lis = '';
		var completeLIs = ListItems.map((data)=>{
			return (
				<li key={data.name} className={data.highest}>
					{data.name}, {data.population}
				</li>
			)
		})
		return (
			<ul className="searchList">
				{completeLIs}
			</ul>
		);
	}

	render(){
    return (
      	<div>
			{this.SearchList(this.props.data)}
		</div>
    )
  }
}