import image from "../images/join.png";
import "../styles/Join.scss";

const Join = () => {
  return (
    <div className="join-back">
      <div className="join">
        <div className="title">Join leargest NFT community</div>
        <div className="text">
          Join the millions of creators, collectors, and curators who are on
          this journey with you.
        </div>
        <img src={image} className="image"></img>
      </div>
    </div>
  );
};

export default Join;
