import React,{Component} from 'react';
import {Route,NavLink,HashRouter} from 'react-router-dom';
import Home from './Home';
import Security from './Security';
import Light from './Light';
import Fan from './Fan';
import Ac from './Ac';
class Main extends Component{
	render(){
		return(
			<HashRouter>
			<div>
				<h2>HomeAutomation</h2>
				<ul className="header">
				<li><NavLink to="/home">Home</NavLink></li>
				<li><NavLink to="/Security">Security</NavLink></li>
				<li><NavLink to="/Light">Light</NavLink></li>
				<li><NavLink to="/Fan">Fan</NavLink></li>
				<li><NavLink to="/Ac">AC</NavLink></li>
				</ul>

				<div className="content">
				<Route path="/home" component={Home}/>
				<Route path="/Security" component={Security}/>
				<Route path="/Light" component={Light}/>
				<Route path="/Fan" component={Fan}/>
				<Route path="/Ac" component={Ac}/>
				</div>
			</div>
			</HashRouter>
			);
	}
}

export default Main;