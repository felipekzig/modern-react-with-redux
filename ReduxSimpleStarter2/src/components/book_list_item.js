import React from 'react';

export default props => {
  const book = props.book;
  return <li className="list-group-item" key={book.title} onClick={() => props.onBookClick(book)}>{book.title}</li>;
};
