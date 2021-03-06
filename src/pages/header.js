import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link,  NavLink as RouterNavLink } from 'react-router-dom';
import logo from '../headerlogo.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
	DropdownItem,
	Container, 
	Row, 
	Col
     } from 'reactstrap';
     
class Header extends Component {
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/"><div className="logo"><img src={logo} /></div></NavbarBrand>
		      <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink tag={RouterNavLink} to="/News" >News</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink tag={RouterNavLink} to="/Product">Product</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;