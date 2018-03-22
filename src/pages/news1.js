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
						<img className="image-news" src={imagenews1} />
						<div className="caption-news">
							<div className="title-news"><h1>Proyek pipa HDPE di tambang Emas Martabe</h1></div>
							<div className="date-news">20 Januari 2018</div>
						</div>
					</div>
					<div className="list-news">
						<img className="image-news" src={imagenews2} />
						<div className="caption-news">
							<div className="title-news"><h1>Pipa HDPE Mulai Menggeser PVC</h1></div>
							<div className="date-news">11 Januari 2018 </div>
						</div>
					</div>
				</div>
            </article> 
			<article>
				<div className="block-news">
					<div className="list-news">
						<img className="image-news" src={imagenews3} />
						<div className="caption-news">
							<div className="title-news"><h1>25 Batang Pipa HDPE Segera Masuk Area Relokasi Bojong Koneng</h1></div>
							<div className="date-news">07 Oktober 2017</div>
						</div>
					</div>
					<div className="list-news">
						<img className="image-news" src={imagenews4} />
						<div className="caption-news">
							<div className="title-news"><h1>Pipa PDAM TKR Bocor, Warga Tanah Tinggi Beli Air Galon</h1></div>
							<div className="date-news">06 Februari 2017</div>
						</div>
					</div>
				</div>
            </article>
			<article>
				<div className="block-news-detail">
					<div className="image-news-detai"><img className="image-news" src={imagenews3} /></div>
					<div className="caption-news">
						<div className="title-news"><h1>25 Batang Pipa HDPE Segera Masuk Area Relokasi Bojong Koneng</h1></div>
						<div className="date-news">07 Oktober 2017</div>
						<div className="description-news">
							<p>BOGOR – PDAM Tirta Pakuan Kota Bogor telah menyusun rencana relokasi pipa AC 18“ di area longsor Kampung Bojong Koneng Desa Ciherang Pondok Kecamatan Caringin Kabupaten Bogor.</p>
						</div>
					</div>
				</div>
            </article>
            <article>
				<div className="block-news-detail">
					<div className="caption-news">
						<div className="description-news">
							<p>Sebanyak 25 batang pipa HDPE 18” (sebagai pengganti pipa AC) sudah tersedia dan segera diakut menuju area relokasi.</p>
							<p>Direktur Teknik PDAM Tirta Pakuan Kota Bogor Syaban Maulana mengatakan pihaknya akan memindahkan pipa AC 18” sepanjang 150 meter dan menggantinya dengan pipa baru jenis HDPE 18”. PDAM telah berkoordinasi dengan pengembang proyek jalan Tol Bocimi untuk memudahkan mobilisasi dan pengangkutan pipa ukuran besar itu.</p>
						</div>
					</div>
				</div>
            </article>
            <article>
				<div className="block-news-detail">
					<div className="caption-news">
						<div className="description-news">
							<p>“Alhamdulillah, kita sudah diberi akses oleh pengembang Bocimi untuk pengiriman truk-truk pengangkut pipa HDPE 18”. Hanya untuk masuk ke area relokasi, pipa tidak bisa masuk karena hanya ada jalan setapak sepanjang 600 meter yang licin saat hujan,” kata Syaban di sela-sela meninjau area relokasi, Jumat (6/10/2017).</p>
						</div>
					</div>
				</div>
            </article>
        </FlipPage>
        </div>
    );
  }
}
export default Content;