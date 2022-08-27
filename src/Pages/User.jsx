import React, { useContext } from "react";
import DarkMode from "../helpers/DarkMode";
import "../css/style.css";
import { NavLink } from "react-router-dom";

export default function User({ user }) {
  const { name, email, id } = user;
  const dark = useContext(DarkMode);
  return (
    <div className="user">
      <img
        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
        alt="user"
      />
      <h5 className={dark ? "dark" : "light"}>{name}</h5>
      <p className={dark ? "dark" : "light"}>{email}</p>
      <div className="btns">
        <NavLink to={`/posts/${id}`}>
          <button>POST</button>
        </NavLink>
        <NavLink to={`/albums/${id}`}>
          <button>ALBUM</button>
        </NavLink>
      </div>
    </div>
  );
}
