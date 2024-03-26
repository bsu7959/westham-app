import React from 'react';
import Home from './pages/Home';
import Article from './pages/Article';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// https://www.whufc.com/news
function App() {
  console.log("app")
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;
