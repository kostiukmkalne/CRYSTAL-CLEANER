import './Navigation.css';

const Navigation = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <a className="nav__link" href="#cleaning_services">
          Cleaning Services
        </a>
      </li>

      <li className="nav__item">
        <a className="nav__link" href="#book_now">
          Book Now
        </a>
      </li>

      <li className="nav__item">
        <a className="nav__link" href="#price">
          Price
        </a>
      </li>

      <li className="nav__item">
        <a className="nav__link" href="#review">
          Review
        </a>
      </li>

      <li className="nav__item">
        <a className="nav__link" href="#contacts">
          Contacts
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;