import "./Banner.css";
import banner from "../../assets/banner.svg";
import star from '../../assets/star.svg';
import check from '../../assets/check.svg';
import dimond from '../../assets/dimond.svg';
import lamp from '../../assets/lamp.svg';

import Button from "../Button/Button";

const Banner = () => (
  <div className="banner-component">
    
    <div className="banner-text-button">
      <h1 className="title">
        Discover
        <br />
        the pleasure of
        <br />
        expert cleaning
      </h1>

      <h3 className="subtitle">
        Fast, flawless, and fun!
        <br />
        Let us redefine cleanliness for you!
      </h3>

      <Button className="button-book"></Button>
    </div>

    <div className="banner-block">
      <a href="#banner">
        <img src={star} className="star-block" alt="star" />
      </a>
      <p className="star-text">
        8 years
        <br />
        on the market
      </p>

      <a href="#banner">
        <img src={check} className="check-block" alt="check" />
      </a>
      <p className="check-text">
        Safety and
        <br />
        reliability
      </p>

      <a href="#banner">
        <img src={dimond} className="dimond-block" alt="dimond" />
      </a>
      <p className="dimond-text">
        Perfect
        <br />
        result
      </p>

      <a href="#banner">
        <img src={lamp} className="lamp-block" alt="lamp" />
      </a>
      <p className="lamp-text">
        Professional
        <br />
        cleaners
      </p>
    </div>

    <div className="banner">
      <a href="#home">
        <img src={banner} className="banner-img" alt="banner" />
      </a>
    </div>
  </div>
);

export default Banner;
