import "../styles/Subscribe.scss";
import image from "../images/subscribe.png";
import arrow from "../images/Arrow 1.svg";

const Subscribe = () => {
  return (
    <div className="subscribe-back">
      <div className="subscribe">
        <div className="contents">
          <div className="title">Subscribe Our Letest Newslaters</div>
          <div className="text">
            Stay Up To Date On New Releases, Interviews, Events, And Updates
            From Foundation's Community.
          </div>
          <div className="form">
            <input className="input" placeholder="Enter your email"></input>
            <div className="button">
              <img src={arrow}></img>
            </div>
          </div>
        </div>
        <img className="image" src={image}></img>
      </div>
    </div>
  );
};

export default Subscribe;
