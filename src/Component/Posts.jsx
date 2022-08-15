import React, { Component } from "react";
import request from "./help";
import Post from "./Post";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.activeUser,
      posts: null,
    };
  }
  componentDidMount() {
    const posts = request(
      `https://jsonplaceholder.typicode.com/posts?userId=${this.state.user.id}`,
      "GET"
    );
    posts.then((posts) => this.setState({ posts }));
  }
  render() {
    const { posts, user } = this.state;
    console.log(user, posts);
    return (
      <div>
        {posts && posts.map((post, i) => <Post key={`post${i}`} post={post} />)}
      </div>
    );
  }
}
