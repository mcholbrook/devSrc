import React, { Component } from "react";

class userInfo extends Component {
  state = {
    github: "",
    linkedIn: "",
    website: "",
  };
  render() {
    return (
      <>
        <p>GitHub: {this.state.github}</p>
        <p>LinkedIn: {this.state.linkedIn}</p>
        <p>Website: {this.state.website}</p>
      </>
    );
  }
}

export default userInfo;
