import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderInputField(field) {
    const { meta: { error, touched } } = field;
    const className = `form-group ${error && touched ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label className="">{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          label="Title"
          component={this.renderInputField}
        />
        <Field
          name="categories"
          label="Categories"
          component={this.renderInputField}
        />
        <Field
          name="content"
          label="Content"
          component={this.renderInputField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title!';
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories!';
  }

  if (!values.content) {
    errors.content = 'Enter some content!';
  }

  return errors;
};

export default reduxForm({
  form: 'PostsNewForm',
  validate
})(PostsNew);
