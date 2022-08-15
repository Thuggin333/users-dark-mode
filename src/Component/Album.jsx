import React, { Component } from "react";
import "./css/style.css";
export default class Album extends Component {
  render() {
    const { title } = this.props.albums;
    return (
      <div className="albumTitle">
        <h4>{title}</h4>
      </div>
    );
  }
}
