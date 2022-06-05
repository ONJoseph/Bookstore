import React from 'react';

import './Books.css';
import Book from './book/Book';

function Books() {
  const books = [
    {
      id: '1',
      author: 'Joseph',
      title: 'How to Achieve Mastery in Software Development',
      category: 'Software',
    },
    {
      id: '2',
      author: 'Armaury',
      title: 'How To Make A Professional Resume',
      category: 'Adventure',
    },
    {
      id: '3',
      author: 'Akasha',
      title: 'The Unbearable Lightness of Being',
      category: 'Lifestyle',
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
