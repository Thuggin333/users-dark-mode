import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DarkMode from "../helpers/DarkMode";
import "./css/header.css";
export default function Header(props) {
  const toDark = () => {
    props.toDark();
  };
  const back = useNavigate();
  const dark = useContext(DarkMode);
  const toBack = () => {
    back(-1);
  };
  return (
    <>
      <header id="header" className={dark ? "darkBgr" : "lightBgr"}>
        <div id="back" onClick={toBack}>
          <h4 className={`backName  ${dark ? "dark" : "light"}`}>BACK</h4>
        </div>
        <div className="dark">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider" onClick={toDark}></span>
          </label>
        </div>
      </header>
    </>
  );
}
