import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
            <div className="nav">
                <NavLink to="/" className="nav-lien-accueil">Accueil</NavLink>
                <NavLink to="/About" className="nav-lien-apropos">A PROPOS</NavLink>    
            </div>
        
    );
};

export default Navigation;