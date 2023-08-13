import "../styles/Head.scss";
import logo from "../images/38779e0ad02d1f137e29c861c1401e05.png";
import React, { useState } from "react";

const Head = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="head">
      <div className="logo">
        <img src={logo}></img>
        <div className="text">12 Animal</div>
      </div>
      <div className="form">
        <div className="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="20"
            viewBox="0 0 11 20"
            fill="none"
          >
            <path
              d="M4.5 16.409C6.433 16.409 8 12.9596 8 8.70452C8 4.44943 6.433 1 4.5 1C2.567 1 1 4.44943 1 8.70452C1 12.9596 2.567 16.409 4.5 16.409Z"
              fill="white"
              fill-opacity="0.43"
              stroke="#BFBFBF"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 14.0134L10 18.416"
              stroke="#BFBFBF"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <input
          className="placeholder"
          placeholder="Search for artworks, collections, artists etc"
        ></input>
      </div>
      <div className="links">
        <div className="link">
          <div className="text">Home</div>
          <div className="below">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                d="M17.2969 12.2344L13.5 16.4531L9.70312 12.2344"
                stroke="white"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="link">
          <div className="text">About us</div>
          <div className="below">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                d="M17.2969 12.2344L13.5 16.4531L9.70312 12.2344"
                stroke="white"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="link">
          <div className="text">Community</div>
          <div className="below">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                d="M17.2969 12.2344L13.5 16.4531L9.70312 12.2344"
                stroke="white"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="button">
          <div className="text">$0.0000000</div>
        </div>
      </div>

      <button onClick={toggleMenu} className="hamburger-button">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      {isOpen && (
        <div className="menu">
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" onClick={toggleMenu}>
            About us
          </a>
          <a href="#community" onClick={toggleMenu}>
            Community
          </a>
        </div>
      )}
    </div>
  );
};

export default Head;
