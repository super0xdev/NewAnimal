import "../styles/Items.scss";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/4.png";
import image5 from "../images/5.png";
import image6 from "../images/6.png";
import image7 from "../images/7.png";
import image8 from "../images/8.png";
import image9 from "../images/9.png";
import image10 from "../images/10.png";
import image11 from "../images/11.png";
import image12 from "../images/12.png";

const Items = () => {
  return (
    <div className="item-back">
      <div className="item">
        <div className="title">About 12 za..</div>
        <div className="items">
          <div className="left">
            <div className="inner">
              <div className="image">
                <img src={image1}></img>
              </div>
              <div className="title">Rabit</div>
              <div className="text">
                The rabbit is the fourth in the twelve-year periodic sequence of
                animals that appear in the Chinese zodiac related to the Chinese
                calendar.
              </div>
            </div>
          </div>
          <div className="right">
            <div className="inner">
              <div className="image">
                <img src={image2}></img>
              </div>
              <div className="title">OX</div>
              <div className="text">
                Oxen used to be capable farming tools in an agricultural
                society, which attach to the symbol of diligence, persistence,
                and honesty.
              </div>
            </div>
          </div>
          <div className="left">
            <div className="inner">
              <div className="image">
                <img src={image3}></img>
              </div>
              <div className="title">TIGER</div>
              <div className="text">
                Tigers, considered to be brave, cruel, forceful, and terrifying,
                are the symbol of power and lordliness in Chinese culture.
              </div>
            </div>
          </div>
          <div className="right">
            <div className="inner">
              <div className="image">
                <img src={image4}></img>
              </div>
              <div className="title">RABBIT</div>
              <div className="text">
                The rabbit is the fourth in the twelve-year periodic sequence of
                animals that appear in the Chinese zodiac related to the Chinese
                calendar.
              </div>
            </div>
          </div>
          <div className="left">
            <div className="inner">
              <div className="image">
                <img src={image5}></img>
              </div>
              <div className="title">DRAGON</div>
              <div className="text">
                Chinese Dragon is de facto an imaginary animal, also the only
                fictitious creature in the 12 zodiac animals, which is composed
                of 9 animals
              </div>
            </div>
          </div>
          <div className="right">
            <div className="inner">
              <div className="image">
                <img src={image6}></img>
              </div>
              <div className="title">SNAKE</div>
              <div className="text">
                Snake carries the meanings of malevolence, cattiness, mystery,
                as well as acumen and divination. In most cases, this animal is
                considered evil and the elongated legless body always scares
                people.
              </div>
            </div>
          </div>
          <div className="left">
            <div className="inner">
              <div className="image">
                <img src={image7}></img>
              </div>
              <div className="title">HORSE</div>
              <div className="text">
                The horse was the most frequent transport means in ancient
                society and it is considered as No. 1 of the most important 6
                animals in China.
              </div>
            </div>
          </div>
          <div className="right">
            <div className="inner">
              <div className="image">
                <img src={image8}></img>
              </div>
              <div className="title">Sheep</div>
              <div className="text">
                Sheep (goat, or ram) is among the animals that people like most.
                It is docile, mellow, and timid.
              </div>
            </div>
          </div>
          <div className="left">
            <div className="inner">
              <div className="image">
                <img src={image9}></img>
              </div>
              <div className="title">MONKEY</div>
              <div className="text">
                The most famous monkey in China is the Monkey King (Sun Wukong)
                born from a stone who is intelligent, brave, rebellious, and
                talented.
              </div>
            </div>
          </div>
          <div className="right">
            <div className="inner">
              <div className="image">
                <img src={image10}></img>
              </div>
              <div className="title">ROOSTER</div>
              <div className="text">
                Back in ancient times when there was no alarm clock, rooster
                played an important role of waking people up.
              </div>
            </div>
          </div>
          <div className="left">
            <div className="inner">
              <div className="image">
                <img src={image11}></img>
              </div>
              <div className="title">DOG</div>
              <div className="text">
                Dog is men's good friend who can understand the human spirit and
                obey its master, whether he is wealthy or not.
              </div>
            </div>
          </div>
          <div className="right">
            <div className="inner">
              <div className="image">
                <img src={image12}></img>
              </div>
              <div className="title">Pig</div>
              <div className="text">
                As the last sign of the Chinese zodiac, Pig represents wealth
                and luck from the ancient times.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
