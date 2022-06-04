import React from 'react';

import Books from './books/Books';
import Form from './form/Form';

import './BooksSection.css';

function BooksSection() {
  return (
    <div className="booksSection">
      <Books />
      <div className="divideSection" />
      <Form />
    </div>
  );
}

export default BooksSection;
