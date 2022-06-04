import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/container/Container';

function App() {
  return (
    <React.StrictMode>
      <Router basename={process.env.PUBLIC_URL}>
        <Container />
      </Router>
    </React.StrictMode>
  );
}

export default App;
