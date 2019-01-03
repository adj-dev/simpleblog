import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import { Link } from 'react-router-dom';

import './listposts.css';

class ListPosts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="post" key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <div className="buttons">
            <Link to={`/edit/${post.id}`}>Edit</Link>
            <Link to={`/delete/${post.id}`}>Delete</Link>
          </div>
        </div>
      );
    });
  }

  render() {
    if (this.props.posts.length === 0) {
      return <div className="post empty">Create a post to view it here!</div>;
    }
    return <div className="post-container">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: Object.values(state.posts) };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(ListPosts);
