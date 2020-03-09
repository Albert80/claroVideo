import React from 'react';
import { Navbar } from 'react-bootstrap';
import LogoSVG from '../assets/img/clarovideo-logo-sitio.svg';
import './Header.css';

class Header extends React.Component {

    render(){
        return(
            <header>
                <Navbar bg="black" variant="dark">
                    <Navbar.Brand>
                        <img
                            alt='Clarovideo Logo'
                            src={LogoSVG}
                            width="213"
                            height="43"
                        />
                    </Navbar.Brand>
                </Navbar>
            </header>
        )
    }
}

export default Header;