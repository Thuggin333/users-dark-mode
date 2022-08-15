import React, { Component } from "react";
import "./css/style.css";
export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, body } = this.props.post;
    return (
      <div className="postDiv">
        <h4 className="postTitle">{title}</h4>
        <p className="postBody">{body}</p>
      </div>
    );
  }
}
