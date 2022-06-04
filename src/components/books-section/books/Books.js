import React from 'react';

import './Books.css';
import Book from './book/Book';

function Books() {
  const books = [
    {
      id: '1',
      author: 'Daniel',
      title: 'How to get away with mass murder',
      category: 'adventure',
    },
    {
      id: '2',
      author: 'Arturo',
      title: 'How To Make A Professional Resume',
      category: 'adventure',
    },
    {
      id: '3',
      author: 'Luis',
      title: 'Polygons Are Old-School, Multigons Are In',
      category: 'maths',
    },
  ];

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
