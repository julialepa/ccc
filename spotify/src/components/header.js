import React, { Component } from 'react';
import './header.css'
import Logo from '../assets/logo.png'


class Header extends Component {
    render() {
        return (
            <div id="header">
                <img alt={'logo'} src= {Logo} />
                <span className="title">SPOTIFY</span>
            </div>
        );
    }
}

export default Header
