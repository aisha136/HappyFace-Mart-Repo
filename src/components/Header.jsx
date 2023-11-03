import React from "react";

//header
export default function Header() {
  return (
    <div className="Header">
      <div className="leftDiv">
        <img 
          src="../images/HappyFace.svg"
          className="leftDiv--img"
        />
        <p className="leftDiv--text">
          HappyFace Mart
        </p>
      </div>
      <div className="middleDiv">
        <button className="middleDiv--button">
          <img src="../images/SearchIcon.svg"/>
        </button>
        <input 
          type="text"
          className="middleDiv--input"
        />
      </div>
      <div className="rightDiv">
        <img src="../images/ProfileIcon.svg"
          className="rightDiv--img"
        />
        <p className="rightDiv--text">
          Login
        </p>
      </div>
    </div>
  )
}