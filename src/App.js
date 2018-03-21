import React, { Component } from 'react';
import FlipPage from 'react-flip-page';

// using ES6 modules
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import Header from './pages/header.js';
import Hal1 from './pages/hal1.js';
import Hal2 from './pages/hal2.js';

class Content extends Component {
	
	geserMenu(hal){
		/*document.getElementById("menu-box-id").scrollLeft=document.getElementById("menu-box-id").scrollLeft+document.getElementById(hal).getBoundingClientRect().left;*/
		//element=document.getElementById("menu-box-id");
		//jarak=document.getElementById("menu-box-id").scrollLeft=document.getElementById("menu-box-id").scrollLeft+document.getElementById(hal).getBoundingClientRect().left;
		var jarak=document.getElementById("menu-box-id").scrollLeft+document.getElementById(hal).getBoundingClientRect().left-15;
		
		document.getElementById("menu-box-id").scrollTo({
			'behavior': 'smooth',
			'left': jarak,
			'top': 0
		});
		return false;
	}
	render(){
		return(
			<Router>
			<div>
				<div id="menu-box-id" className="menu-box">
				 <ul id="menu-bar-id" className="menu-bar">
						<li id="hal2"><Link onClick={this.geserMenu.bind(this,'hal2')} to={'/Hal1'}>PE</Link></li>
						<li id="hal3"><Link onClick={this.geserMenu.bind(this,'hal3')} to={'/Hal2'}>PVC</Link></li>
						<li id="hal4"><Link onClick={this.geserMenu.bind(this,'hal4')} to={'/Hal1'}>PVC DRAINAGE</Link></li>
						<li id="hal5"><Link onClick={this.geserMenu.bind(this,'hal5')} to={'/Hal2'}>PVC CONDUIT</Link></li>
				 </ul>
				</div> 
				 <Switch>
						 <Route exact path='/' component={Hal1} />
						 <Route exact path='/Hal1' component={Hal1} />
						 <Route exact path='/Hal2' component={Hal2} />
				 </Switch>
			 </div>
		 </Router>
		);
	}
}
class App extends Component {
  render() {
    return (
      <div className="App">
			<div>
				<Header />
			</div>
      <div className="content-area">
				<Content />
      </div>
	</div>
	  );
  }
 
}
function FiterLabel(props){
	const isActive=props.isActive;
	const label=props.label;
	var class_filter="filter-label";
	if(isActive==true){
		class_filter="filter-label active";
	}
	return <span className={class_filter}>{label}</span>;
}
export default App;
