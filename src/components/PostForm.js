import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostForm extends Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return <span>{error}</span>;
    }
  }

  renderInput = ({ input, meta, label }) => {
    if (label === 'Title') {
      return (
        <div>
          <input {...input} autoComplete="off" placeholder={label} />
          {this.renderError(meta)}
        </div>
      );
    }

    return (
      <div>
        <textarea {...input} autoComplete="off" placeholder={label} />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    return (
      <div className="create-post">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="title" component={this.renderInput} label="Title" />
          <Field name="body" component={this.renderInput} label="Body" />
          <button>POST</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'A title is required';
  }

  if (!formValues.body) {
    errors.body = 'A body is required';
  }

  return errors;
};

export default reduxForm({
  form: 'postForm',
  validate
})(PostForm);
