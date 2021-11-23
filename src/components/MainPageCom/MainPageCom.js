import React from "react";
import "./MainPageCom.css";

const MainPageCom = () => {
  return (
    <>
      <div className="bgc">
        <div className="inner-div">
          <h1 className="title">Quantum Houses</h1>
          <div className="txt-image">
            <img
              className="img-house"
              src="https://previews.123rf.com/images/carriebradshaw1/carriebradshaw11703/carriebradshaw1170300026/74648992-modern-architectural-graphic-house-stylish-european-design-flat-style-vector-illustration-.jpg"
              alt=""
            />

            <div className="text-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div>© Copyright 2021 All Rights reserved by QH </div>
      </div>
    </>
  );
};

export default MainPageCom;
