import React, { Component } from 'react';
import PipaJIS from './hal1-pipa-jis.js';
import PipaSNI from './hal1-pipa-sni.js';
import FittingJIS from './hal1-fitting-jis.js';
import FittingSNI from './hal1-fitting-sni.js';
import imgjis from '../JIS.jpg';
import imgsni from '../SNI.jpg';

class MainView extends Component{
	constructor(props) {
    super(props);
    this.state = {
      isFitting: false,
      isSNI: false
    };

    this.handleFittingChange = this.handleFittingChange.bind(this);
    this.handleSNIChange = this.handleSNIChange.bind(this);
	}
	
	handleFittingChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		
		this.setState({
		  [name]: target.checked
		});
		
		//console.log(name+" "+target.checked);
	}
	handleSNIChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		
		this.setState({
		  [name]: target.checked
		});
		
		//console.log(name+" "+target.checked);
	}

	
    render(){
        return (
			<div>
				<div className="filter-pipa">
					<label className="rb-switcher left-position"><FiterLabel label="Pipes" type="text" isActive={!this.state.isFitting}/> <input type="checkbox"  name="isFitting" checked={this.state.isFitting} onChange={this.handleFittingChange} /><i></i> <FiterLabel label="Fittings" type="text" isActive={this.state.isFitting}/></label>
					<label className="rb-switcher right-position"><FiterLabel label={imgjis} type="img" isActive={!this.state.isSNI}/> <input type="checkbox" name="isSNI" checked={this.state.isSNI} onChange={this.handleSNIChange} /><i></i> <FiterLabel label={imgsni} type="img"  isActive={this.state.isSNI}/></label>
				</div>
				
				<div>
					<Content isFitting={ this.state.isFitting}  isSNI={ this.state.isSNI} />
				</div>
			</div>
			
        )
    }
}
function FiterLabel(props){
	const isActive=props.isActive;
	const label=props.label;
	const type=props.type;
	var class_filter="filter-label";
	if(isActive==true){
		class_filter="filter-label active";
	}
	if(type=="img"){
		return <span className={class_filter}><img src={label}/></span>;
	}else{
		return <span className={class_filter}>{label}</span>;
	}
}
function Content(props){
	const isSNI = props.isSNI;
	const isFitting = props.isFitting;
	if(isFitting===false && isSNI===false){
		return <PipaJIS />;
	}else if(isFitting===false && isSNI===true){
		return <PipaSNI />
	}else if(isFitting===true && isSNI===false){
		return <FittingJIS />
	}else if(isFitting===true && isSNI===true){
		return <FittingSNI />
	}
	return <PipaSNI />;
}

export default MainView
