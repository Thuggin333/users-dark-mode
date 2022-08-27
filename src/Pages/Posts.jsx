import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import request from "../helpers/request";
import Post from "./Post";
import "../css/style.css";
import DarkMode from "../helpers/DarkMode";

export default function Posts() {
  const [post, setPost] = useState([]);
  const { userId } = useParams();
  const dark = useContext(DarkMode);

  useEffect(() => {
    request(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(
      (post) => setPost(post)
    );
  }, []);
  return (
    <div id="mainPost" className={dark ? "darkBgr" : "lightBgr"}>
      {post && post.map((posts, i) => <Post key={`posts${i}`} posts={posts} />)}
    </div>
  );
}
