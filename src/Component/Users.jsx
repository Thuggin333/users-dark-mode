import React, { Component } from "react";
import request from "./help";
import User from "./User";
import "./css/style.css";
import Posts from "./Posts";
import Albums from "./Albums";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: null,
      users: null,
      post: false,
      album: false,
    };
    this.activeUser = this.activeUser.bind(this);
    this.activeAlbum = this.activeAlbum.bind(this);
    this.activePost = this.activePost.bind(this);
  }
  componentDidMount() {
    const users = request(`https://jsonplaceholder.typicode.com/users`, "GET");
    users.then((users) => this.setState({ users }));
  }
  activeUser(activeUser) {
    this.setState({ activeUser });
  }
  activePost() {
    this.setState({ ...this.state, post: true });
  }
  activeAlbum() {
    this.setState({ ...this.state, album: true });
  }
  render() {
    const { users, activeUser, post, album } = this.state;
    console.log(users);
    return post ? (
      <Posts activeUser={activeUser} />
    ) : album ? (
      <Albums activeUser={activeUser} />
    ) : (
      <div className="users">
        {users &&
          users.map((user, i) => (
            <User
              key={`user${i}`}
              user={user}
              activeUser={this.activeUser}
              activeAlbum={this.activeAlbum}
              activePost={this.activePost}
            />
          ))}
      </div>
    );
  }
}
