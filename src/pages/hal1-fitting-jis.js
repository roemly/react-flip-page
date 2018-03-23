import React, { Component } from 'react';
import FlipPage from 'react-flip-page';

// Import React Table
import { makeData, Logo, Tips } from "../pages/data-table.js";
import ReactTable from "react-table";
import "react-table/react-table.css";

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
import jis1 from '../assets/jis1.jpg';     
import jis2 from '../assets/jis2.jpg';     
import jis3 from '../assets/jis3.jpg';     
import jis4 from '../assets/jis4.jpg';     
import jis5 from '../assets/jis5.jpg';     
import jis6 from '../assets/jis6.jpg';     
import jis7 from '../assets/jis7.jpg';     
import jis8 from '../assets/jis8.jpg';     

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
								<div className="name-fitting">Faucet Knee</div>
							</Col>
							<Col xs="6">
								<img src={jis1} />
							</Col>
							<Col xs="6">
								<table cellpadding="15" align="center" class="table table-striped">
									<tbody>
										<tr>
											<th bgcolor="grey">UKURAN</th>
										</tr>
										<tr>
											<td>1/2"</td>
										</tr>
										<tr>
											<td>3/4"</td>
										</tr>
									</tbody>
								</table>
							</Col>
                        </Row>
                        <Row>
							<Col xs="12">
								<div className="name-fitting">Faucetknee Kuningan</div>
							</Col>
							<Col xs="6">
								<img src={jis2} />
							</Col>
							<Col xs="6">
								<table cellpadding="15" align="center" class="table table-striped">
									<tbody>
										<tr>
											<th bgcolor="grey">UKURAN</th>
										</tr>
										<tr>
											<td>1/2 x 1/2"</td>
										</tr>
										<tr>
											<td>1/2 x 3/4"</td>
										</tr>
										<tr>
											<td>3/4 x 3/4"</td>
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
								<div className="name-fitting">Faucet Tee</div>
							</Col>
							<Col xs="6">
								<img src={jis3} />
							</Col>
							<Col xs="6">
								<table cellpadding="15" align="center" class="table table-striped">
									<tbody>
										<tr>
											<th bgcolor="grey">UKURAN</th>
										</tr>
										<tr>
											<td>1/2"</td>
										</tr>
										<tr>
											<td>3/4"</td>
										</tr>
										<tr>
											<td>3/4 x 1/2"</td>
										</tr>
									</tbody>
								</table>
							</Col>
                        </Row>
                        <Row>
							<Col xs="12">
								<div className="name-fitting">Faucet Tee Kuningan</div>
							</Col>
							<Col xs="6">
								<img src={jis4} />
							</Col>
							<Col xs="6">
								<table cellpadding="15" align="center" class="table table-striped">
									<tbody>
										<tr>
											<th bgcolor="grey">UKURAN</th>
										</tr>
										<tr>
											<td>1/2 x 1/2"</td>
										</tr>
										<tr>
											<td>1/2 x 3/4"</td>
										</tr>
										<tr>
											<td>3/4 x 3/4"</td>
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
								<div className="name-fitting">Plug</div>
							</Col>
							<Col xs="6">
								<img src={jis5} />
							</Col>
							<Col xs="6">
								<table cellpadding="15" align="center" class="table table-striped">
									<tbody>
										<tr>
											<th bgcolor="grey">UKURAN</th>
										</tr>
										<tr>
											<td>1/2"</td>
										</tr>
										<tr>
											<td>3/4"</td>
										</tr>
										<tr>
											<td>1"</td>
										</tr>
									</tbody>
								</table>
							</Col>
                        </Row>
						<Row>
							<Col xs="12">
								<div className="name-fitting">Faucet Tee Kuningan</div>
							</Col>
							<Col xs="6">
								<img src={jis6} />
							</Col>
							<Col xs="6">
								<table cellpadding="15" align="center" class="table table-striped">
									<tbody>
										<tr>
											<th bgcolor="grey">UKURAN</th>
										</tr>
										<tr>
											<td>1-1/4"</td>
										</tr>
										<tr>
											<td>1-1/2"</td>
										</tr>
										<tr>
											<td>2"</td>
										</tr>
										<tr>
											<td>3"</td>
										</tr>
										<tr>
											<td>4"</td>
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
								<div className="name-fitting">Cap</div>
							</Col>
							<Col xs="6">
								<img src={jis7} />
							</Col>
							<Col xs="6">
								<table cellpadding="15" align="center" class="table table-striped">
									<tbody>
										<tr>
											<th bgcolor="grey">UKURAN</th>
										</tr>
										<tr>
											<td>1/2"</td>
										</tr>
										<tr>
											<td>3/4"</td>
										</tr>
										<tr>
											<td>1"</td>
										</tr>
										<tr>
											<td>2"</td>
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
class TableData extends React.Component {
    constructor() {
      super();
      this.state = {
        data: makeData()
      };
    }
    render() {
      const { data } = this.state;
      return (
        <div>
          <ReactTable
            data={data}
            columns={[
              {
                Header: "Name",
                columns: [
                  {
                    Header: "First Name",
                    accessor: "firstName"
                  },
                  {
                    Header: "Last Name",
                    id: "lastName",
                    accessor: d => d.lastName
                  }
                ]
              },
              {
                Header: "Info",
                columns: [
                  {
                    Header: "Age",
                    accessor: "age"
                  },
                  {
                    Header: "Status",
                    accessor: "status"
                  }
                ]
              },
              {
                Header: 'Stats',
                columns: [
                  {
                    Header: "Visits",
                    accessor: "visits"
                  }
                ]
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
          <br />
          <Tips />
          <Logo />
        </div>
      );
    }
  }
export default Content;