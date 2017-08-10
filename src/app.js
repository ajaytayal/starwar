import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { Switch, BrowserRouter, Route } from 'react-router-dom';
//components
import MainComponent from "./components/MainComponent.js";
import LoginComponent from "./components/LoginComponent.js";
import SearchComponent from "./components/SearchComponent.js";
import store from "./store";

ReactDOM.render(<Provider store={store}>
					<BrowserRouter>
						<Switch>
						  <Route exact path='/' component={MainComponent}/>
						  <Route path='/login' component={LoginComponent}/>
						  <Route path='/search' component={SearchComponent}/>
						</Switch>
					 </BrowserRouter>
				  </Provider>
                ,document.getElementById("main")
                );
