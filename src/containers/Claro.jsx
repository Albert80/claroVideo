import React, { Component } from 'react';
import Header from '../components/Header';

class Claro extends Component {
    render() {
        return(
            <>
                <Header />
                {this.props.children}
            </>
        );
    }
}

export default Claro;