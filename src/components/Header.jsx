import logo from "../assets/logoHome.svg";
import Navigation from "../components/Navigation";


const Header = () => {
    return (
            <header className="header">
                <img className ="header__logo" src={logo} alt="Logo de l'agence immobilière Kasa" title="Logo Kasa" />
                <Navigation />
            </header>
    );
};

export default Header;