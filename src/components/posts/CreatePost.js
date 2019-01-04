import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createPost } from '../../actions';
import PostForm from './PostForm';

import './posts.css';

class CreatePost extends Component {
  onSubmit = formValues => {
    this.props.createPost(formValues);
  };

  render() {
    return (
      <div>
        <PostForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createPost }
)(CreatePost);
