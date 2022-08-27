import React, { useContext, useEffect, useState } from "react";
import "../css/style.css";
import { Routes, Route, useParams } from "react-router-dom";
import DarkMode from "../helpers/DarkMode";
import request from "../helpers/request";
import Album from "./Album";

export default function Albums() {
  const [album, setAlbum] = useState([]);
  const { userId } = useParams();
  const dark = useContext(DarkMode);
  useEffect(() => {
    request(
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
    ).then((album) => setAlbum(album));
  }, []);
  return (
    <div id="mainAlbum" className={dark ? "darkBgr" : "lightBgr"}>
      {album &&
        album.map((albums, i) => <Album key={`albums${i}`} albums={albums} />)}
    </div>
  );
}
