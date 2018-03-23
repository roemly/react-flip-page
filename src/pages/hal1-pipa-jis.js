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
import imagepipa from '../assets/image-pipa.JPG';
import imagecatalog from '../assets/catalog.jpg';    

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
                                <table className="table table-striped">
									<tbody>
										<tr className="text-center">
											<th rowspan="2">&#216; (mm)</th>
											<th rowspan="2">Ukuran</th>
											<th colspan="3" style={{minWidth:180}}>Tebal Dinding (mm)</th>
											<th rowspan="2">Panjag (m)</th>
										</tr>
										<tr className="text-center">
											<th>AW</th>
											<th>D</th>
											<th>C</th>
										</tr>
										<tr>
											<td>17</td>
											<td>5/8"</td>
											<td></td>
											<td></td>
											<td>0.8 </td>
											<td>4</td>
										</tr>
										<tr>
											<td>22</td>
											<td>1/2"</td>
											<td>1.6 </td>
											<td></td>
											<td>1.0 </td>
											<td>4</td>
										</tr>
										<tr>
											<td>26</td>
											<td>3/4"</td>
											<td>1.8 </td>
											<td></td>
											<td>1.0 </td>
											<td>4</td>
										</tr>
										<tr>
											<td>32</td>
											<td>1"</td>
											<td>2.0 </td>
											<td></td>
											<td>1.0 </td>
											<td>4</td>
										</tr>
										<tr>
											<td>42</td>
											<td>1-1/4"</td>
											<td>2.3 </td>
											<td>1.2 </td>
											<td>1.0 </td>
											<td>4</td>
										</tr>
										<tr>
											<td>48</td>
											<td>1-1/2"</td>
											<td>2.3 </td>
											<td>1.3 </td>
											<td>1.2 </td>
											<td>4</td>
										</tr>
										<tr>
											<td>60</td>
											<td>2"</td>
											<td>2.4 </td>
											<td>1.3 </td>
											<td>1.2 </td>
											<td>4</td>
										</tr>
										<tr>
											<td>76</td>
											<td>2-1/2"</td>
											<td>2.6 </td>
											<td>1.4 </td>
											<td>1.3 </td>
											<td>4</td>
										</tr>
										<tr>
											<td>89</td>
											<td>3"</td>
											<td>3.1 </td>
											<td>1.7 </td>
											<td>1.4 </td>
											<td>4</td>
										</tr>
										<tr>
											<td>114</td>
											<td>4"</td>
											<td>4.1 </td>
											<td>2.1 </td>
											<td>1.4 </td>
											<td>4</td>
										</tr>
										<tr>
											<td>140</td>
											<td>5"</td>
											<td>5.5 </td>
											<td>2.6 </td>
											<td>1.6 </td>
											<td>4</td>
										</tr>
										<tr>
											<td>165</td>
											<td>6"</td>
											<td>6.4 </td>
											<td>3.0 </td>
											<td></td>
											<td>4</td>
										</tr>
										<tr>
											<td>216</td>
											<td>8"</td>
											<td>8.3 </td>
											<td>4.2 </td>
											<td></td>
											<td>4</td>
										</tr>
										<tr>
											<td>267</td>
											<td>10"</td>
											<td>9.6 </td>
											<td>5.1 </td>
											<td></td>
											<td>4</td>
										</tr>
										<tr>
											<td>318</td>
											<td>12"</td>
											<td>10.7 </td>
											<td>6.3 </td>
											<td></td>
											<td>4</td>
										</tr>
										<tr>
											<td>370</td>
											<td>14"</td>
											<td>12.0 </td>
											<td>8.0 </td>
											<td></td>
											<td>4</td>
										</tr>
										<tr>
											<td>420</td>
											<td>16"</td>
											<td>13.0 </td>
											<td>9.0 </td>
											<td></td>
											<td>4</td>
										</tr>
										<tr>
											<td>520</td>
											<td>20"</td>
											<td></td>
											<td>14.0 </td>
											<td></td>
											<td>4</td>
										</tr>
										<tr>
											<td>630</td>
											<td>24"</td>
											<td></td>
											<td>14.8 </td>
											<td></td>
											<td>4</td>
										</tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="article-2">
                        <div className="article-line">
                            <h3 className="text-center">Aplication Tips</h3>
                            <YouTube
                            videoId="zEhQGIi2s9o"
                            opts={opts}   
                            onReady={this._onReady}
                            />
                        </div>
                    </div>
                </article>
                <article>
                    <div className="article-1" style={{backgroundColor:`white`}}>
                       <div className="article-line">
                            <table>
                                <tbody>
                                <tr>
                                    <td width="49%"><img src={imagecatalog} /></td>
                                    <td width="1%">&nbsp;</td>
                                    <td width="50%" className="text-right">
                                        <h3 className="text-right">Printable<br/>Catalog</h3>
                                        <a href="" className="btn btn-default more">Download Now</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="article-2">
                        
                    </div>
                </article>
                </FlipPage>
            );
          }
}
export default Content;