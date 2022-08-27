import React from "react";
import DarkMode from "../helpers/DarkMode";
import { useContext } from "react";
import "../css/style.css";
import { NavLink } from "react-router-dom";

export default function Post({ posts }) {
  const { title, body, id } = posts;
  const dark = useContext(DarkMode);
  return (
    <NavLink to={`/comments/${id}`}>
      <div className={`post ${dark ? "dark" : "light"}`}>
        <h2 className={dark ? "dark" : "light"}>{title}</h2>
        <p className={dark ? "dark" : "light"}>{body}</p>
      </div>
    </NavLink>
  );
}
