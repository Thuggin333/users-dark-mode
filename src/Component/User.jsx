import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.userPost = this.userPost.bind(this);
    this.userAlbum = this.userAlbum.bind(this);
  }
  userPost() {
    this.props.activePost();
    this.props.activeUser(this.props.user);
  }
  userAlbum() {
    this.props.activeAlbum();
    this.props.activeUser(this.props.user);
  }
  render() {
    const { name, email, phone } = this.props.user;
    return (
      <div className="container">
        <div className="usersPerson">
          <h3>{name}</h3>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        <div className="btnDiv">
          <p onClick={this.userPost}>POST</p>
          <p onClick={this.userAlbum}>ALBUM</p>
        </div>
      </div>
    );
  }
}
