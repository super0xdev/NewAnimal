import "../styles/Intro.scss";
import image from "../images/intro-back.png";

const Intro = () => {
  return (
    <div className="intro-back">
      <div className="intro">
        <div className="contents">
          <div className="title">12 zodiac Animal</div>
          <div className="text">
            Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster,
            Dog, and Pig. Each sign is named after an animal, and each animal
            has its own unique characteristics.
          </div>
          <div className="buttons">
            <div className="button">
              <div className="name">Telegram</div>
            </div>
            <div className="button">
              <div className="name">Twitter</div>
            </div>
          </div>
        </div>
        <img className="image" src={image}></img>
      </div>
    </div>
  );
};

export default Intro;
