import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

import BookListItem from '../components/book_list_item';

class BookList extends Component {

  renderList() {
    const onBookClick = book => this.props.selectBook(book);
    return this.props.books.map(book => <BookListItem key={book.title} book={book} onBookClick={onBookClick} />);
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// Whatever is returned will show up as props inside of BookList
function mapStateToProps (state) {
  return {
    books: state.books
  };
}

// Anything return from this function will end up as props on BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook }, dispatch);
}

// Promote BookList from a component to a container
// it needs to know about this new dispatch method – selectBook – and make it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
