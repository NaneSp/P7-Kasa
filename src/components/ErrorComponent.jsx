import React from 'react';
import '../styles/components/_ErrorComponent.scss';
import { Link } from 'react-router-dom';

const ErrorComponent = () => {
    return (
        <div className='error'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link className="link" to="/"> Retourner sur la page d'accueil </Link>
        </div>
    );
};

export default ErrorComponent;