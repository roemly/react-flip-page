import React, { Component } from 'react';
import FlipPage from 'react-flip-page';
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
                 Lorem ipsum dolor sit amet, vel id odio utinam, patrioque necessitatibus eos eu. Ius cu meis utroque praesent, vim fugit ubique ut. Qui ex zril munere voluptaria, ea labores salutandi patrioque eum. Nec eu tempor definiebas, aeque tollit nam eu, quis appareat molestiae pro te. Ferri illud altera mea cu, sit no harum tibique inciderint. Veri utamur ullamcorper duo et, cu primis repudiare prodesset has.
                </article>
                <article>
                 Lorem ipsum dolor sit amet, vel id odio utinam, patrioque necessitatibus eos eu. Ius cu meis utroque praesent, vim fugit ubique ut. Qui ex zril munere voluptaria, ea labores salutandi patrioque eum. Nec eu tempor definiebas, aeque tollit nam eu, quis appareat molestiae pro te. Ferri illud altera mea cu, sit no harum tibique inciderint. Veri utamur ullamcorper duo et, cu primis repudiare prodesset has.
                </article>
                <article>
                 Lorem ipsum dolor sit amet, vel id odio utinam, patrioque necessitatibus eos eu. Ius cu meis utroque praesent, vim fugit ubique ut. Qui ex zril munere voluptaria, ea labores salutandi patrioque eum. Nec eu tempor definiebas, aeque tollit nam eu, quis appareat molestiae pro te. Ferri illud altera mea cu, sit no harum tibique inciderint. Veri utamur ullamcorper duo et, cu primis repudiare prodesset has.
                </article>
                <article>
                 Lorem ipsum dolor sit amet, vel id odio utinam, patrioque necessitatibus eos eu. Ius cu meis utroque praesent, vim fugit ubique ut. Qui ex zril munere voluptaria, ea labores salutandi patrioque eum. Nec eu tempor definiebas, aeque tollit nam eu, quis appareat molestiae pro te. Ferri illud altera mea cu, sit no harum tibique inciderint. Veri utamur ullamcorper duo et, cu primis repudiare prodesset has.
                </article>
                <article>
                 Lorem ipsum dolor sit amet, vel id odio utinam, patrioque necessitatibus eos eu. Ius cu meis utroque praesent, vim fugit ubique ut. Qui ex zril munere voluptaria, ea labores salutandi patrioque eum. Nec eu tempor definiebas, aeque tollit nam eu, quis appareat molestiae pro te. Ferri illud altera mea cu, sit no harum tibique inciderint. Veri utamur ullamcorper duo et, cu primis repudiare prodesset has.
                </article>
                <article>
                Lorem ipsum dolor sit amet, vel id odio utinam, patrioque necessitatibus eos eu. Ius cu meis utroque praesent, vim fugit ubique ut. Qui ex zril munere voluptaria, ea labores salutandi patrioque eum. Nec eu tempor definiebas, aeque tollit nam eu, quis appareat molestiae pro te. Ferri illud altera mea cu, sit no harum tibique inciderint. Veri utamur ullamcorper duo et, cu primis repudiare prodesset has.

                Ea vix dolor detracto deterruisset. Errem soleat omittam an eos, no libris conceptam sed. Ne eam rebum debet tritani, has magna aliquid efficiendi ex, usu cu duis wisi eirmod. Ei has error audiam, probo doming pri ea, rebum facer omnes cu eos. Ad mel adolescens necessitatibus, id velit mediocritatem has. Id aeterno torquatos accommodare his, vix tractatos aliquando eu. Sit ea oratio forensibus, unum summo recusabo ei mei.

                An nihil neglegentur eos. Error iuvaret reprehendunt est ad, vix populo utroque no, quem soleat gloriatur pri ut. Pri te movet aeterno instructior. Eum magna mucius an.

                Et vis noluisse vituperatoribus, ea brute malis comprehensam qui, impedit oporteat theophrastus mea et. Oratio imperdiet concludaturque ei usu, pri id dissentiet instructior. Quo vidit dictas oportere no, te vel quem putant sententiae, ne ius utinam audiam. Falli elitr percipitur eu eam, inermis scriptorem cu sea. Pro ne atqui summo paulo.
                </article>
               


                </FlipPage>
            );
          }
}
export default Content;