import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import NavBar from './major/NavBar';
import Landing from './major/Landing';
import Post from './major/Post';
import Login from './major/Login';
import Search from './major/Search';
import './style/main.scss'

ReactDOM.render(
	<React.StrictMode>
		<div className="main">
			<Router>
				<NavBar />
				<Switch>
					<Route exact path='/' render={ (props) => <Landing {...props} /> } />
					<Route path='/story/*' render={ (props) => <Post {...props} /> } />
					<Route exact path='/login' render={ (props) => <Login {...props} /> } />
					<Route exact path='/search' render={ (props) => <Search {...props} /> } />
				</Switch>
			</Router>
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
