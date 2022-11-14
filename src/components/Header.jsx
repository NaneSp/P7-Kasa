import React from 'react';
import logo from"../assets/logoHome.svg";
import Navigation from '../components/Navigation';
import "../styles/components/_header.scss";


const Header = () => {
    return (
        <header className="header-nav">
            <img className ="logo" src={logo} alt="Logo de l'agence immobilière Kasa" title="Logo Kasa" />
            <Navigation />
        </header>
    );
};

export default Header;