import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
            <div className="nav">
                <NavLink to="/" className="nav__link-accueil">Accueil</NavLink>
                <NavLink to="/About" className="nav__link-apropos">A propos</NavLink>    
            </div>
        
    );
};

export default Navigation;