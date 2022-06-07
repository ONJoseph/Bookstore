import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../../redux/books/books';

import './Form.css';

function Form() {
  const newBook = () => ({
    title: '', author: '', id: uuidv4(), category: 'amaze',
  });
  const [book, setBook] = useState(newBook());
  const dispatch = useDispatch();

  const changeTitle = (title) => {
    setBook({
      ...book,
      title,
    });
  };

  const changeAuthor = (author) => {
    setBook({
      ...book,
      author,
    });
  };

  const cleanBook = () => {
    setBook(newBook());
  };

  const submit = () => {
    if (book.title === '') return;
    if (book.author === '') return;
    dispatch(addBook(book));
    cleanBook();
  };
  return (
    <div>
      <form className="formBookAdd" name="add-book">
        <h3>ADD NEW BOOK</h3>
        <div className="inputs">
          <input className="formInput" onChange={(e) => changeTitle(e.target.value)} id="title" name="title" type="text" value={book.title} placeholder="Book title" />
          <input className="formInput" onChange={(e) => changeAuthor(e.target.value)} id="author" name="author" type="text" value={book.author} placeholder="Author" />
          <button className="addBookBtn" onClick={submit} type="button">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
