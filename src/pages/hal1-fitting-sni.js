import React, { Component } from 'react';
import FlipPage from 'react-flip-page';

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

import imagepipa from '../assets/image-pipa.JPG';
import imagecatalog from '../assets/catalog.jpg';         
import SNI1 from '../assets/SNI1.png';     
import SNI2 from '../assets/SNI2.png';     
import SNI3 from '../assets/SNI3.png';     
import SNI4 from '../assets/SNI4.png';     
import SNI5 from '../assets/SNI5.png';     
import SNI6 from '../assets/SNI6.png';     
import SNI7 from '../assets/SNI7.png';     
import SNI8 from '../assets/SNI8.png';   

    class Content extends Component {
        
          render() {
            const theEndStyle = {
                alignItems: 'flex-end',
                backgroundColor: '#ff0000',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                padding: 10
              };
            const theEnd = <div style={theEndStyle}>The End!</div>;
            return (
                <FlipPage
                lastComponent={theEnd}
                >
                    <article>
                    <div className="article-1 bg-white-full">
                         <Row>
							<Col xs="12">
								<div className="name-fitting">Knee 45&deg;</div>
							</Col>
							<Col xs="6">
								<img src={SNI1} />
							</Col>
							<Col xs="6">
								<table cellpadding="15" align="center" class="table table-striped">
									<tbody>
										<tr>
											<th bgcolor="grey">UKURAN</th>
										</tr>
										<tr>
											<td>63 X 45</td>
										</tr>
										<tr>
											<td>90 X 45</td>
										</tr>
									</tbody>
								</table>
							</Col>
                        </Row>
                        <Row>
							<Col xs="12">
								<div className="name-fitting">Reducer Tee</div>
							</Col>
							<Col xs="6">
								<img src={SNI2} />
							</Col>
							<Col xs="6">
								<table cellpadding="15" align="center" class="table table-striped">
									<tbody>
										<tr>
											<th bgcolor="grey">UKURAN</th>
										</tr>
										<tr>
										<td>63 X 63</td>
										</tr>
										<tr>
										<td>90 X 90</td>
										</tr>
										<tr>
										<td>110 X 110</td>
										</tr>
										<tr>
										<td>160 X 160</td>
										</tr>
									</tbody>
								</table>
							</Col>
                        </Row>
                    </div>
                </article>
                <article>
                    <div className="article-1 bg-white-full">
                        <Row>
							<Col xs="12">
								<div className="name-fitting">Flange Socket</div>
							</Col>
							<Col xs="6">
								<img src={SNI3} />
							</Col>
							<Col xs="6">
								<table cellpadding="15" align="center" class="table table-striped">
									<tbody>
										<tr>
											<th bgcolor="grey">UKURAN</th>
										</tr>
										<tr>
										<td>63</td>
										</tr>
										<tr>
										<td>90</td>
										</tr>
										<tr>
										<td>110</td>
										</tr>
										<tr>
										<td>160</td>
										</tr>
									</tbody>
								</table>
							</Col>
                        </Row>
                        <Row>
							<Col xs="12">
								<div className="name-fitting">Tee All Flange</div>
							</Col>
							<Col xs="6">
								<img src={SNI4} />
							</Col>
							<Col xs="6">
								<table cellpadding="15" align="center" class="table table-striped">
									<tbody>
										<tr>
											<th bgcolor="grey">UKURAN</th>
										</tr>
										<tr>
										<td>63 X 63</td>
										</tr>
										<tr>
										<td>90 X 90</td>
										</tr>
										<tr>
										<td>110 X 110</td>
										</tr>
									</tbody>
								</table>
							</Col>
                        </Row>
					</div>
                </article>
                <article>
                    <div className="article-1 bg-white-full">
						<Row>
							<Col xs="12">
								<div className="name-fitting">Faucet Socket</div>
							</Col>
							<Col xs="6">
								<img src={SNI5} />
							</Col>
							<Col xs="6">
								<table cellpadding="15" align="center" class="table table-striped">
									<tbody>
										<tr>
											<th bgcolor="grey">UKURAN</th>
										</tr>
										<tr>
										<td>20 X 20</td>
										</tr>
										<tr>
										<td>25 X 25</td>
										</tr>
										<tr>
										<td>32 X 32</td>
										</tr>
									</tbody>
								</table>
							</Col>
                        </Row>
						<Row>
							<Col xs="12">
								<div className="name-fitting">Socket</div>
							</Col>
							<Col xs="6">
								<img src={SNI6} />
							</Col>
							<Col xs="6">
								<table cellpadding="15" align="center" class="table table-striped">
									<tbody>
										<tr>
											<th bgcolor="grey">UKURAN</th>
										</tr>
										<tr>
										<td>20 X 20</td>
										</tr>
										<tr>
										<td>32 X 32</td>
										</tr>
										<tr>
										<td>50 X 50</td>
										</tr>
										<tr>
										<td>63 X 63</td>
										</tr>
									</tbody>
								</table>
							</Col>
                        </Row>
                    </div>
                </article>
                <article>
                    <div className="article-1 bg-white-full">
						<Row>
							<Col xs="12">
								<div className="name-fitting">Reducer Socket</div>
							</Col>
							<Col xs="6">
								<img src={SNI7} />
							</Col>
							<Col xs="6">
								<table cellpadding="15" align="center" class="table table-striped">
									<tbody>
										<tr>
											<th bgcolor="grey">UKURAN</th>
										</tr>
										<tr>
										<td>110 X 90</td>
										</tr>
									</tbody>
								</table>
							</Col>
                        </Row>
						<Row>
							<Col xs="12">
								<div className="name-fitting">Valve Socket</div>
							</Col>
							<Col xs="6">
								<img src={SNI8} />
							</Col>
							<Col xs="6">
								<table cellpadding="15" align="center" class="table table-striped">
									<tbody>
										<tr>
											<th bgcolor="grey">UKURAN</th>
										</tr>
										<tr>
										<td>20 X 20</td>
										</tr>
										<tr>
										<td>32 X 32</td>
										</tr>
										<tr>
										<td>40 X 40</td>
										</tr>
										<tr>
										<td>50 X 50</td>
										</tr>
									</tbody>
								</table>
							</Col>
                        </Row>
                    </div>
                </article>
                </FlipPage>
            );
          }
}
export default Content;