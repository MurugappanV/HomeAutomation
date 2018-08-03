import React,{Component} from 'react';
import {Route,NavLink,HashRouter} from 'react-router-dom';
import Home from './Home';
import Security from './Security';
import Light from './Light';
import Fan from './Fan';
import Ac from './Ac';
import './App.css';
import './bootstrap.css';
class Main extends Component{
	render(){
		return(
			<HashRouter>
			<div>
			<div className="nav navbar-default">
				<div className="navbar-brand">
				<div className="navbar-header">
				<a className="navbar-brand">HomeAutomation</a>
				</div>
				</div>
				<ul className="nav navbar-nav">
				<li><NavLink to="/home">Home</NavLink></li>
				<li><NavLink to="/Security">Security</NavLink></li>
				<li><NavLink to="/Light">Light</NavLink></li>
				<li><NavLink to="/Fan">Fan</NavLink></li>
				<li><NavLink to="/Ac">AC</NavLink></li>
				</ul>
			</div>
			<div>
				<div className="container">
				<Route path="/home" component={Home}/>
				<Route path="/Security" component={Security}/>
				<Route path="/Light" component={Light}/>
				<Route path="/Fan" component={Fan}/>
				<Route path="/Ac" component={Ac}/>
				</div>
			</div>
			</div>
			</HashRouter>
			);
	}
}

export default Main;