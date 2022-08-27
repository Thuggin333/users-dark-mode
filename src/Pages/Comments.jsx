import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "../helpers/request";
import Comment from "./Comment";
import "../css/style.css";
import DarkMode from "../helpers/DarkMode";

export default function Comments() {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const dark = useContext(DarkMode);
  useEffect(() => {
    request(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    ).then((comments) => setComments(comments));
  }, [postId]);
  console.log(comments);
  return (
    <div id="parentComment" className={dark ? "darkBgr" : "lightBgr"}>
      {comments &&
        comments.map((comment, i) => (
          <Comment comment={comment} key={`comment${i}`} />
        ))}
    </div>
  );
}
