import React, { Component } from "react";
import request from "./help";
import Album from "./Album";
import "./css/style.css";

export default class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.activeUser,
      albums: null,
    };
  }
  componentDidMount() {
    const albums = request(
      `https://jsonplaceholder.typicode.com/albums?userId=${this.state.users.id}`,
      "GET"
    );
    albums.then((albums) => this.setState({ ...this.state, albums }));
  }
  render() {
    const { albums } = this.state;
    console.log(albums);
    return (
      <div>
        {albums &&
          albums.map((albums, i) => (
            <Album key={`album${i}`} albums={albums} />
          ))}
      </div>
    );
  }
}
