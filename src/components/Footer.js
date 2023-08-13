import "../styles/Footer.scss";

import image from "../images/38779e0ad02d1f137e29c861c1401e05.png";
import twitter from "../images/twitter.png";
import tg from "../images/tg.png";

const Footer = () => {
  return (
    <div className="footer-back">
      <div className="footer">
        <div className="logo">
          <img className="image" src={image}></img>
          <div className="text">12 Animal</div>
        </div>
        <div className="content">
          Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster,
          Dog, and Pig. Each sign is named after an animal, and each animal has
          its own unique characteristics.
        </div>
        <div className="links">
          <img className="link" src={twitter}></img>
          <img className="link" src={tg}></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
