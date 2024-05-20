import React from 'react'
import styled from '@emotion/styled'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const displayWidth = window.innerWidth;

const Container = styled.div`
  position: relative;
  left: -80px;
  width: calc(100% + 80px);
  height: 60px;
  padding-left: 50px;
  background-image:url(assets/header-graphic.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  border-style: solid;
  border-width: 0px;
  border-bottom-width: 1px;
  border-color: #dfdfdfcc;
  
`;

const Ul = styled.ul`
  float: left;
  list-style:none;
  height: 100%;
  text-align:center;
  &:after { clear: both; }
`;

const Li = styled.li`
  display: inline-block;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #7a263a;
  }

`;


export default function Header() {
  return (
    <Container>
      <Ul>
        <Li>News</Li>

      </Ul>

    </Container>
  )
}
