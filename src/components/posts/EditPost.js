import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchPost } from '../../actions';
import PostForm from './PostForm';
import { editPost } from '../../actions';

class EditPost extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editPost(this.props.post.id, formValues);
  };

  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <PostForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.post, 'title', 'body')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id], state };
};

export default connect(
  mapStateToProps,
  { fetchPost, editPost }
)(EditPost);
