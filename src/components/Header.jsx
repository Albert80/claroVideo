import React from 'react';
import { Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import LogoSVG from '../assets/img/clarovideo-logo-sitio.svg';
import './Header.css';

class Header extends React.Component {
    handleClick = () => {
        this.props.history.push('/');
    }

    render(){
        return(
            <header>
                <Navbar bg="black" variant="dark">
                    <Navbar.Brand className='img-go-home' onClick={this.handleClick}>
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

export default withRouter(Header);