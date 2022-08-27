import React from "react";
import DarkMode from "../helpers/DarkMode";
import "../css/style.css";
import { useContext } from "react";

export default function Comment({ comment }) {
  const { name } = comment;
  const dark = useContext(DarkMode);
  return (
    <div id="mainCommnet">
      <h1 className={dark ? "dark" : "light"}>{name}</h1>
    </div>
  );
}
