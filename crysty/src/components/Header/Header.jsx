import './Header.css';
import logo from '../../assets/logo.svg';
import phone from '../../assets/phone.svg';
import Navigation from "../Navigation/Navigation";


const Header = () => (
  <header className="header">
    <a href="#home">
      <img src={logo} className="app-logo" alt="logo" />
    </a>

    <Navigation />

    <a href="tel:+1 (847)391-1008" className="phone_number">
      <img src={phone} alt="phone" />
      +1 (847)391-1008
    </a>
  </header>
);

export default Header;