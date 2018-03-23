import React, { Component } from 'react';
import FlipPage from 'react-flip-page';

// using ES6 modules
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

import Header from './pages/header.js';
import Hal1 from './pages/hal1.js';
import Hal2 from './pages/hal2.js';

import News1 from './pages/news1.js';
import News2 from './pages/news2.js';
import News1Detail from './pages/news1-detail.js';

class Tab extends Component{
	constructor(props) {
		super(props);
		this.state = {
			selectedTabId: 'hal1'
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

class Product extends Component {
	constructor(props) {
		super(props);
	}
	route_content(url1,url2) {
			url1=url1===undefined?'':url1;
			url2=url2===undefined?'':url2;

				if(url1==''){
					return <Hal1 />;
				}
				if(url1=='Hal1'){
					return <Hal1 />;
				}
				if(url1=='Hal2'){
					return <Hal2 />;
				}
	}
	
	render(){
		const url1 = this.props.match.params.url1
		const url2 = this.props.match.params.url2	
		console.log(this.props);	
		const data = {
			points: {
			  total: [
				{ id: 1, name: 'hal1', text: 'PE', link:'/Product/Hal1'  },
				{ id: 2, name: 'hal2', text: 'PVC', link: '/Product/Hal2' },
				{ id: 3, name: 'hal3', text: 'PVC DRAINAGE', link: '/Product/Hal1' },
				{ id: 4, name: 'hal4', text: 'PVC CONDUIT', link: '/Product/Hal2' },
			  ]
			}
		  }  	
		return(
			<div>
				<div id="menu-box-id" className="menu-box">
					<Tabs  data={ data } />
				</div> 
				{this.route_content(url1,url2)}
			 </div> 
		);
	}
}

class News extends Component {
	
	constructor(props) {
		super(props);
	}
	route_content(url1,url2) {
				url1=url1===undefined?'':url1;
				url2=url2===undefined?'':url2;
				if(url1==''){
					return <News1 />;
				}
				if(url1=='News1'){
					return <News1 />;
				}
				if(url1=='News2'){
					return <News2 />;
				}
				if(url2=='Detail'){
					return <News1Detail />;
				}
	}
	render(){
	
	const url1 = this.props.match.params.url1
	const url2 = this.props.match.params.url2
	console.log(this.props);	
		const data = {
			points: {
			  total: [
				{ id: 1, name: 'news1', text: 'Berita', link:'/News/News1'  },
				{ id: 2, name: 'news2', text: 'Politik', link: '/News/News2' },
			  ]
			}
		}
	/*
	<Switch>
				 		 <Route exact path='/' component={News1} />
						 <Route exact path='/News' component={News1} />
						 <Route exact path='/News/News1' component={News1} />
						 <Route exact path='/News/News2' component={News2} />
						 <Route exact path='/News/News1/Detail' component={News1Detail} />
				 </Switch>
	*/			 
		return(
		<div>
			<div id="menu-box-id" className="menu-box">
				<Tabs  data={ data } />
			</div> 
			{this.route_content(url1,url2)} 
		</div>	
		);
	}
}
class App extends Component {
  render() {
    return (
      <Router>
			<div className="App">
			<div>
				<Header />
			</div>
      <div className="content-area">
			
				 <Switch>
				 		 <Route exact path='/' component={News} />
						 <Route exact path='/News' component={News} />
						 <Route exact path='/Product' component={Product} />						 
						 <Route exact path='/News/:url1' component={News} />
						 <Route exact path='/News/:url1/:url2' component={News} />
						 <Route exact path='/Product/:url1' component={Product} />						 
						 <Route exact path='/Product/:url1/:url2' component={Product} />						 
				 </Switch>
		 
      </div>
		</div>
	</Router>
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
