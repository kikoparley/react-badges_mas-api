import React from 'react';

import '../styles/Badge.css'
import confLogo from '../images/badge-header.svg'
class Navbar extends React.Component {
    render(){
        return <div className="Navbar">
            <a className="Navbar__brand" href="/">
            <img src={confLogo} alt="logo" />
            <span className="font-weight-light" >Platzi</span>
            <span className="font-weight-bold">Conf</span>
            </a>

        </div>;
    }
}

export default Navbar;