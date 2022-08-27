import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import DarkMode from "../helpers/DarkMode";
import Users from "./Users";
import Posts from "./Posts";
import Comments from "./Comments";
import Albums from "./Albums";

export default function Home() {
  const [dark, setDark] = useState(false);

  const toDark = () => {
    setDark(!dark);
  };
  return (
    <>
      <DarkMode.Provider value={dark}>
        <BrowserRouter>
          <Header toDark={toDark} />
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/posts">
              <Route path=":userId" element={<Posts />} />
            </Route>
            <Route path="/albums">
              <Route path=":userId" element={<Albums />} />
            </Route>
            <Route path="/comments">
              <Route path=":postId" element={<Comments />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DarkMode.Provider>
    </>
  );
}
