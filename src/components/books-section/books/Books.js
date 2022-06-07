import React from 'react';
import { useSelector } from 'react-redux';

import './Books.css';
import Book from './book/Book';

function Books() {
  const books = useSelector((state) => state.book);

  return (
    <div>
      <ul className="bookItems">
        {books && books.map((book) => (
          <li className="bookItem" key={book.id}>
            <Book id={book.id} author={book.author} title={book.title} category={book.category} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
