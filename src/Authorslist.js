import React, { Component } from "react";
import AuthorCard from "./AuthorCard";

class Authorslist extends Component {
  render() {
    let iterate = this.props.authors.map(author => (
      <AuthorCard author={author} key={author.last_name} />
    ));

    return (
      <div className="this.props.authors">
        <h3>Authors</h3>
        <div className="row">{iterate}</div>
      </div>
    );
  }
}

export default Authorslist;
