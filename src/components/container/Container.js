import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Nav from '../nav/Nav';
import BooksSection from '../books-section/BooksSection';
import Categories from '../categories/Categories';

import './Container.css';

function Container() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate replace to="/store" />} />
        <Route path="/store" element={<BooksSection />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default Container;
