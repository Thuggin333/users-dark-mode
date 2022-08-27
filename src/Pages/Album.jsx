import React from "react";
import { useContext } from "react";
import DarkMode from "../helpers/DarkMode";
import "../css/style.css";
import { NavLink } from "react-router-dom";

export default function Album({ albums }) {
  const { id, title } = albums;
  const dark = useContext(DarkMode);
  return (
    <NavLink to={`/albums/${id}`}>
      <div id="mainAlbums" className={dark ? "dark" : "light"}>
        <h1 className={dark ? "dark" : "light"}>{title}</h1>
      </div>
    </NavLink>
  );
}
