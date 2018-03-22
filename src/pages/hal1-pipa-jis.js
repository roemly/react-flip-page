import React, { Component } from 'react';
import FlipPage from 'react-flip-page';
import YouTube from 'react-youtube';
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
import imagepipa from '../image-pipa.JPG';
import imagecatalog from '../catalog.jpg';     

    class Content extends Component {
        
          render() {
            const opts = {
                height: '315',
                width: '560',
                playerVars: { // https://developers.google.com/youtube/player_parameters
                  autoplay: 0
                }
            };
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
                                <h1>Pipa JIS</h1>
                                <table className="table">
                                <tbody>
                                    <tr className="text-center">
                                        <th>&#216; mm</th>
                                        <th>SC</th>
                                        <th>RR</th>
                                        <th>8kgf/cm<sup>2</sup> S12,5</th>
                                        <th>10kgf/cm<sup>2</sup> S12,5</th>
                                        <th>10kgf/cm<sup>2</sup> S12,5</th>
                                    </tr>
                                    <tr>
                                        <td>20</td>
                                        <td>&#8226;</td>
                                        <td></td>
                                        <td>0,8</td>
                                        <td></td>
                                        <td>1,0</td>
                                    </tr>
                                    <tr>
                                        <td>25</td>
                                        <td>&#8226;</td>
                                        <td></td>
                                        <td>1,1</td>
                                        <td></td>
                                        <td>1,2</td>
                                    </tr>
                                    <tr>
                                        <td>32</td>
                                        <td>&#8226;</td>
                                        <td></td>
                                        <td>1,3</td>
                                        <td></td>
                                        <td>1,6</td>
                                    </tr>
                                    <tr>
                                        <td>40</td>
                                        <td>&#8226;</td>
                                        <td></td>
                                        <td>1,6</td>
                                        <td></td>
                                        <td>1,9</td>
                                    </tr>
                                    <tr>
                                        <td>50</td>
                                        <td>&#8226;</td>
                                        <td></td>
                                        <td>2,0</td>
                                        <td></td>
                                        <td>2,4</td>
                                    </tr>
                                    <tr>
                                        <td>63</td>
                                        <td>&#8226;</td>
                                        <td>&#8226;</td>
                                        <td></td>
                                        <td>2,4</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>75</td>
                                        <td>&#8226;</td>
                                        <td>&#8226;</td>
                                        <td></td>
                                        <td>2,9</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>90</td>
                                        <td>&#8226;</td>
                                        <td>&#8226;</td>
                                        <td></td>
                                        <td>3,5</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>110</td>
                                        <td>&#8226;</td>
                                        <td>&#8226;</td>
                                        <td></td>
                                        <td>4,2</td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
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
                            <YouTube
                            videoId="zEhQGIi2s9o"
                            opts={opts}   
                            onReady={this._onReady}
                            />
                        </div>
                    </div>
                    <div className="article-2">
                        <div className="article-line">
                            <table>
                                <tbody>
                                <tr>
                                    <td width="49%"><img src={imagecatalog} /></td>
                                    <td width="1%">&nbsp;</td>
                                    <td width="50%">
                                        <h3 className="text-right">Printable<br/>Catalog</h3>
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
export default Content;