import "../styles/Section.scss";
import image from "../images/section.png";
import arrow from "../images/Vector.svg";

const Section = () => {
  return (
    <div className="section-back">
      <div className="section">
        <div className="top">
          <img className="logo" src={image}></img>
          <div className="contents">
            <div className="up">
              <div className="title">12 ANIMAL</div>
              <div className="chain">
                <div className="text">ETHERIUM</div>
              </div>
            </div>
            <div className="below">
              <div className="title">0.000000151 $</div>
              <img className="image" src={arrow}></img>
              <div className="text">(-0.65%)</div>
            </div>
          </div>
          <div className="power">Powered by .......</div>
        </div>
        <div className="bottom">
          <div className="item">
            <div className="title">Rank</div>
            <div className="subtitle">0000</div>
          </div>
          <div className="item">
            <div className="title">Market Cap</div>
            <div className="subtitle">$00.00 M</div>
          </div>
          <div className="item">
            <div className="title">Volume</div>
            <div className="subtitle">$00.00 M</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
