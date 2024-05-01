import React from 'react';
import Home from './pages/Home';
import Article from './pages/Article';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';

const Div = styled.div`
  padding-left: 80px;
  border-style: solid;
  border-width: 0px;
  border-left-width: 42px;
  border-color: #7a263a;
`

const Logo = styled.div`
  width: 74px;
  height: 74px;
  background-image: url('assets/westham-logo.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: absolute;
  top: 11px;
  left: 12px;
  z-index:20;
`
// https://www.whufc.com/news
function App() {
  console.log("app")
  return (
    <Div>
      <Logo></Logo>
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </Router>
    </Div>
  );
}

export default App;
