import logo from"../assets/logoHome.svg";
import Navigation from '../components/Navigation';


const Header = () => {
    return (
            <header className="header-nav">
                <img className ="logo" src={logo} alt="Logo de l'agence immobilière Kasa" title="Logo Kasa" />
                <Navigation />
            </header>
    );
};

export default Header;