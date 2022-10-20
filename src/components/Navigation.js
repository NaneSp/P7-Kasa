import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/_navigation.scss';

const Navigation = () => {
    return (
        <div className="nav">
            <NavLink to="/" className="nav-lien-accueil">Accueil</NavLink>
            <NavLink to="/Apropos" className="nav-lien-apropos">A PROPOS</NavLink>    
        </div>
        
    );
};

export default Navigation;