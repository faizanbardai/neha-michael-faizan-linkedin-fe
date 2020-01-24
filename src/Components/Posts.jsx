import React, { Component } from "react";
import SinglePost from "./SinglePost";
import { Container } from "react-bootstrap";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }
  render() {
    const { posts } = this.state;
    return (
      <Container className="my-2">
        {posts.length === 0 ? (
          <div>Loading...</div>
        ) : (
          posts.map(post => <SinglePost key={post._id} post={post} />)
        )}
      </Container>
    );
  }
  componentDidMount = async () => {
    const responsePosts = await fetch(
      process.env.REACT_APP_BASE_URL + "/posts"
    );
    const posts = await responsePosts.json();
    this.setState({ posts });
  };
}
