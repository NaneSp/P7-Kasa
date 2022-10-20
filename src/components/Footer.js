import React from 'react';
import logoFooter from '../assets/logoFooter.svg';
import "../styles/components/_footer.scss";

const Footer = () => {
    return (
        <footer className='piedDePage'>
            <img src={logoFooter} alt="logo de l'agence immobilière Kasa" title="logo agence Kasa"/>
            <p className='copyright'>© 2020. All rights reserved</p>
        </footer>
    );
};

export default Footer;