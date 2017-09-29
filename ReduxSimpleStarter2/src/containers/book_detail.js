import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    const book = this.props.activeBook;

    if (!book) {
      return <div>Select a book to get started.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <span><strong>Title:</strong> {book.title}</span>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    activeBook: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
