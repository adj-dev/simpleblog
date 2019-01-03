import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deletePost, fetchPost } from '../actions';
import Modal from './Modal';
import history from '../history';

import './components.css';

class DeletePost extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.post) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete "${this.props.post.title}"?`;
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <>
        <button onClick={() => this.props.deletePost(id)}>Delete</button>
        <Link to="/posts">Cancel</Link>
      </>
    );
  }

  render() {
    return (
      <Modal
        onDismiss={() => history.push('/posts')}
        header="Delete Post"
        content={this.renderContent()}
        actions={this.renderActions()}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { deletePost, fetchPost }
)(DeletePost);
