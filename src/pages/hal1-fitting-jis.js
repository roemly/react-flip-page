import React, { Component } from 'react';
import FlipPage from 'react-flip-page';

// Import React Table
import { makeData, Logo, Tips } from "../pages/data-table.js";
import ReactTable from "react-table";
import "react-table/react-table.css";
/*
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
*/
import imagepipa from '../assets/image-pipa.JPG';
import imagecatalog from '../assets/catalog.jpg';     

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
                    <div className="article-1">
                        <div className="article-line">
                            <div className="table-responsive">
                            <h1>Fitting JIS</h1>
                            <TableData />
                            </div>
                        </div>
                    </div>
                    <div className="article-2">
                        <div className="article-line">
                            <img src={imagepipa} />
                        </div>
                    </div>
                </article>
                <article>
                    <div className="article-1">
                        <div className="article-line">
                            <h3 className="text-center">Aplication Tips</h3>
                            <iframe title="video satu" width="560" height="315" src="https://www.youtube.com/embed/zEhQGIi2s9o" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="article-2">
                        <div className="article-line">
                            <table>
                                <tbody>
                                <tr>
                                    <td width="49%"><img src={imagecatalog} /></td>
                                    <td width="1%">&nbsp;</td>
                                    <td width="50%" className="text-right">
                                        <h3>Printable<br/>Catalog</h3>
                                        <a href="" className="btn btn-default more">Download Now</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
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