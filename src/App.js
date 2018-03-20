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
		var jarak=document.getElementById("menu-box-id").scrollLeft+document.getElementById(hal).getBoundingClientRect().left;
		
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
						<li id="hal1"><Link onClick={this.geserMenu.bind(this,'hal1')} to={'/'}  >Home</Link></li>
						<li id="hal2"><Link onClick={this.geserMenu.bind(this,'hal2')} to={'/Hal1'}  >Halaman 1</Link></li>
						<li id="hal3"><Link onClick={this.geserMenu.bind(this,'hal3')} to={'/Hal2'}>Halaman 2</Link></li>
						<li id="hal4"><Link onClick={this.geserMenu.bind(this,'hal4')} to={'/Hal1'}>Halaman 3</Link></li>
						<li id="hal5"><Link onClick={this.geserMenu.bind(this,'hal5')} to={'/Hal2'}>Halaman 4</Link></li>
						<li id="hal6"><Link onClick={this.geserMenu.bind(this,'hal6')} to={'/Hal1'}>Halaman 5</Link></li>
						<li id="hal7"><Link onClick={this.geserMenu.bind(this,'hal7')} to={'/Hal2'}>Halaman 6</Link></li>
						<li id="hal8"><Link onClick={this.geserMenu.bind(this,'hal8')} to={'/Hal1'}>Halaman 7</Link></li>
				 </ul>
				</div> 
				 <hr />
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

export default App;
