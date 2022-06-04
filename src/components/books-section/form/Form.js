import React from 'react';

import './Form.css';

function Form() {
  return (
    <div>
      <form className="formBookAdd">
        <h3>ADD NEW BOOK</h3>
        <div className="inputs">
          <input className="formInput" id="title" name="title" type="text" placeholder="Book title" />
          <input className="formInput" id="author" name="author" type="text" placeholder="Author" />
          <button className="addBookBtn" type="submit">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
