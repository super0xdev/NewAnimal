import "../styles/About.scss";
import image from "../images/about-back.png";

const About = () => {
  return (
    <div className="about-back">
      <div className="about">
        <div className="title">About</div>
        <div className="contents">
          <img className="image" src={image}></img>
          <div className="text">
            First came the Rat, then the Ox, the Tiger, Rabbit, Dragon, Snake,
            Horse, Sheep, Monkey, Rooster, Dog and Pig. Thus we have 12 signs
            today. The Chinese horoscope is based on these 12 Animals Signs,
            each having its own year in the cycle.
            <br />
            CA:0xa72CB8a91B9dFe4f596f4e9F11d6471EcE9552F7
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
