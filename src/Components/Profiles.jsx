import React, { Component } from "react";
import SinglePost from "./SinglePost";

export default class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], profiles: [] };
  }
  render() {
    const { profiles, posts } = this.state;
    return (
      <div>
        {profiles.length === 0 ? (
          <div>Loading...</div>
        ) : (
          posts.map(post => (
            <SinglePost
              post={post}
              profile={profiles.find(
                profile => profile.username === post.username
              )}
            />
          ))
        )}
      </div>
    );
  }
  componentDidMount = async () => {
    const responsePosts = await fetch(
      process.env.REACT_APP_BASE_URL + "/posts"
    );
    const responseProfiles = await fetch(
      process.env.REACT_APP_BASE_URL + "/profiles"
    );

    const posts = await responsePosts.json();
    const profiles = await responseProfiles.json();

    this.setState({ posts, profiles });
  };
}
