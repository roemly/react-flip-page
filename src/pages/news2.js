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
import imagenews8 from '../assets/news8.jpg';   
import imagenews9 from '../assets/news9.jpg';   
import imagenews10 from '../assets/news10.jpg';   
import imagenews4 from '../assets/news4.jpg';   
import imagenews5 from '../assets/news5.jpg';   
import imagenews6 from '../assets/news6.jpg';   
import imagenews7 from '../assets/news7.jpg';   
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
            <article className="first_block">
				<div className="block-news">
					<div className="list-news">
					<NavLink tag={RouterNavLink} to="/News/News1/Detail" >
						<div className="image-news-thunmbnail">
							<img className="image-news" src={imagenews8} />
						</div>
						<div className="caption-news">
							<div className="title-news"><h1>Terdampak Proyek LRT, Pipa Air di Gatsu Direlokasi</h1></div>
							<div className="date-news">20 Januari 2018</div>
						</div>
					</NavLink>
					</div>
					<div className="list-news">
					<NavLink tag={RouterNavLink} to="/News/News1/Detail" >
						<div className="image-news-thunmbnail">
							<img className="image-news" src={imagenews10} />
						</div>
						<div className="caption-news">
							<div className="title-news"><h1>PDAM Bogor Kebut Pemasangan Pipa Cimanggu</h1></div>
							<div className="date-news">10 Februari 2018</div>
						</div>
					</NavLink>	
					</div>
					<div className="list-news">
						<NavLink tag={RouterNavLink} to="/News/News1/Detail" >
							<div className="image-news-thunmbnail">
								<img className="image-news" src={imagenews9} />
							</div>
							<div className="caption-news">
								<div className="title-news"><h1>PDAM Badung Pindahkan Interkoneksi Pipa</h1></div>
								<div className="date-news">19 Maret 2018 </div>
							</div>
						</NavLink>	
					</div>
				</div>
            </article> 
			<article>
				<div className="block-news">
					<div className="list-news">
					<NavLink tag={RouterNavLink} to="/News/News1/Detail" >
						<div className="image-news-thunmbnail">
							<img className="image-news" src={imagenews1} />
						</div>
						<div className="caption-news">
							<div className="title-news"><h1>Proyek pipa HDPE di tambang Emas Martabe</h1></div>
							<div className="date-news">20 Januari 2018</div>
						</div>
					</NavLink>
					</div>
					<div className="list-news">
					<NavLink tag={RouterNavLink} to="/News/News1/Detail" >
						<div className="image-news-thunmbnail">
							<img className="image-news" src={imagenews6} />
						</div>
						<div className="caption-news">
							<div className="title-news"><h1>Pemain Asing Incar Pasar Produk Pipa di Indonesia</h1></div>
							<div className="date-news">19 November 2017</div>
						</div>
					</NavLink>	
					</div>
					<div className="list-news">
					<NavLink tag={RouterNavLink} to="/News/News1/Detail" >
						<div className="image-news-thunmbnail">
							<img className="image-news" src={imagenews5} />
						</div>
						<div className="caption-news">
							<div className="title-news"><h1>Pemasangan Pipa HDPE, Solusi Kebocoran Pipa di Tegal Gede</h1></div>
							<div className="date-news">08 Oktober 2017</div>
						</div>
					</NavLink>	
					</div>
					<div className="list-news">
					<NavLink tag={RouterNavLink} to="/News/News1/Detail" >
						<div className="image-news-thunmbnail">
							<img className="image-news" src={imagenews3} />
						</div>
						<div className="caption-news">
							<div className="title-news"><h1>25 Batang Pipa HDPE Segera Masuk Area Relokasi Bojong Koneng</h1></div>
							<div className="date-news">07 Februari 2018</div>
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