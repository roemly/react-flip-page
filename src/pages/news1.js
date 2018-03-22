import React, { Component } from 'react';
import FlipPage from 'react-flip-page';
import { NavLink as RouterNavLink } from 'react-router-dom';
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
	 
import imagenews1 from '../assets/martabe.jpg';   
import imagenews2 from '../assets/hdpe.jpg';   
import imagenews3 from '../assets/bojongkenong.jpg';   
import imagenews4 from '../assets/news4.jpg';   
import imagesnews3images from '../assets/news3images.jpg';   
     
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
        
        <div className="page-news">
        <FlipPage
        lastComponent={theEnd}
        >
            <article>
				<div className="block-news">
					<div className="list-news">
					<NavLink tag={RouterNavLink} to="/News/News1/Detail" >
						<img className="image-news" src={imagenews1} />
						<div className="caption-news">
							<div className="title-news"><h1>Proyek pipa HDPE di tambang Emas Martabe</h1></div>
							<div className="date-news">20 Januari 2018</div>
						</div>
					</NavLink>
					</div>
					<div className="list-news">
						<NavLink tag={RouterNavLink} to="/News/News1/Detail" >
							<img className="image-news" src={imagenews2} />
							<div className="caption-news">
								<div className="title-news"><h1>Pipa HDPE Mulai Menggeser PVC</h1></div>
								<div className="date-news">11 Januari 2018 </div>
							</div>
						</NavLink>	
					</div>
				</div>
            </article> 
			<article>
				<div className="block-news">
					<div className="list-news">
					<NavLink tag={RouterNavLink} to="/News/News1/Detail" >
						<img className="image-news" src={imagenews3} />
						<div className="caption-news">
							<div className="title-news"><h1>25 Batang Pipa HDPE Segera Masuk Area Relokasi Bojong Koneng</h1></div>
							<div className="date-news">07 Oktober 2017</div>
						</div>
					</NavLink>	
					</div>
					<div className="list-news">
					<NavLink tag={RouterNavLink} to="/News/News1/Detail" >
						<img className="image-news" src={imagenews4} />
						<div className="caption-news">
							<div className="title-news"><h1>Pipa PDAM TKR Bocor, Warga Tanah Tinggi Beli Air Galon</h1></div>
							<div className="date-news">06 Februari 2017</div>
						</div>
					</NavLink>
					</div>
				</div>
            </article>
			
        </FlipPage>
        </div>
    );
  }
}
export default Content;