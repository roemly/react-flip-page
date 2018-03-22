import React, { Component } from 'react';
import FlipPage from 'react-flip-page';

// using ES6 modules
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

import Header from './pages/header.js';
import Hal1 from './pages/hal1.js';
import Hal2 from './pages/hal2.js';

class Tab extends Component{
	constructor(props) {
		super(props);
		this.state = {
			selectedTabId: '1'
		  };
	}
	
	render() {
	  return (<li id={this.props.name}
		className={ this.props.isActive ? 'menu-top active': 'menu-top' }
		onClick={ this.props.onActiveTab }
	  >
		<Link to={this.props.link}>{this.props.text}</Link>
	  </li>);
	}
  };
  
  class Tabs extends Component{
	constructor(props) {
		super(props);
		this.state = {
			selectedTabId: '1'
		  }; 
	}
	
	isActive(id) {
	  return this.state.selectedTabId === id;
	}
	
	setActiveTab(selectedTabId,hal) {
		
		this.setState({ selectedTabId });
		this.geserMenu(hal);
	}
	geserMenu(hal){
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
	  var total = this.props.data.points.total,
		  tabs = total.map(function (el, i) {
			return (<Tab 
			  key={ i }
			  link={ el.link }
			  name={ el.name } 
			  text={ el.text } 
			  isActive={ this.isActive(el.id) } 
			  onActiveTab={this.setActiveTab.bind(this, el.id, el.name)}
			/>)
		  }, this);
				  
	  return (<ul  id="menu-bar-id" className="menu-bar">
	   { tabs }
	  </ul>);
	}
  }
///////////////

class Content extends Component {
	
	
	render(){
		const data = {
			points: {
			  total: [
				{ id: 1, name: 'hal1', text: 'PE', link:'/Hal1'  },
				{ id: 2, name: 'hal2', text: 'PVC', link: '/Hal2' },
				{ id: 3, name: 'hal3', text: 'PVC DRAINAGE', link: '/Hal1' },
				{ id: 4, name: 'hal4', text: 'PVC CONDUIT', link: '/Hal2' },
			  ]
			}
		  }  	
		return(
			<Router>
			<div>
				<div id="menu-box-id" className="menu-box">
					<Tabs  data={ data } />
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
