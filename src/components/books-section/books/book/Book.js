import React from 'react';

import { PropTypes } from 'prop-types';

import './Book.css';

function Book(props) {
  const {
    id, author, title, category,
  } = props;
  const links = [
    {
      id: 1,
      href: '#',
      name: 'Comments',
    },
    {
      id: 2,
      href: '#',
      name: 'Remove',
    },
    {
      id: 3,
      href: '#',
      name: 'Edit',
    },
  ];
  return (
    <div className="book" id={id}>
      <div className="bookStuff">
        <div className="bookInfo">
          <span className="bookCategory">{category}</span>
          <span className="bookTitle">{title}</span>
          <span className="bookAuthor">{author}</span>
        </div>
        <div className="bookActions">
          <ul className="actions">
            {links && links.map((link) => (
              <li key={link.id} className="action">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bookProgress">
        <div className="completion">
          <div className="circle-wrap">
            <div className="circle">
              <div className="mask full">
                <div className="fill" />
              </div>
              <div className="mask half">
                <div className="fill" />
              </div>
              <div className="inside-circle" />
            </div>
          </div>
          <div className="number">
            <div className="percentage">
              <span>{Math.round(Math.random() * 100)}</span>
              <span>%</span>
            </div>
            <small className="completed">Completed</small>
          </div>
        </div>
        <div className="vl" />
        <div className="chapterProgress">
          <div className="chapterSection">
            <div className="current">CURRENT CHAPTER</div>
            <div className="chapter">Chapter 17</div>
          </div>
          <button className="update" type="button"><span>UPDATE PROGRESS</span></button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
