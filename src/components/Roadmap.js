import "../styles/Roadmap.scss";
import image from "../images/roadmap.png";

const Roadmap = () => {
  return (
    <div className="roadmap-back">
      <div className="roadmap">
        <div className="contents">
          <div className="left">
            <div className="title">Road Map</div>
            <div className="subtitle">12 ANIMAL MRC..</div>
            <img src={image} className="image" />
          </div>
          <div className="right">
            <div className="item">
              <div className="title">
                <span className="bold">Phase 1: </span>
                Launch
              </div>
              <div className="text">CMC & Coingecko listing</div>
              <div className="text">Collab partner TBA</div>
              <div className="text">3M Market cap</div>
              <div className="text">Marketing kick off</div>
            </div>
            <div className="item">
              <div className="title">
                <span className="bold">Phase 2: </span>
                Marketing
              </div>
              <div className="text">Campaign</div>
              <div className="text">Whiltelist activities for12 Animal NFT</div>
              <div className="text">Push on trending socials</div>
              <div className="text">
                NFT WL (8% supply reserved for NFT holders)
              </div>
            </div>
            <div className="item">
              <div className="title">
                <span className="bold">Phase 3: </span>
                Listing & Marketing
              </div>
              <div className="text">CEX listing</div>
              <div className="text">New KOLs collab</div>
              <div className="text">NFT drop awareness</div>
              <div className="text">Road to 1 BRUCillion MC!</div>
            </div>
            <div className="item">
              <div className="title">
                <span className="bold">Phase 4: </span>TBA (monitor & adapt)
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <div className="text">BUY NOW</div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
