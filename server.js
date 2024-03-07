// const request = require('./crawler.js')
// const express = require('express');
// const path = require('path');
import express from 'express';
import path from 'path';
import { request } from './crawler.js';
const app = express();
const PORT = 8080;
const articles = await request(0);
console.log(articles)
app.listen(PORT, function() {
    console.log(`listening on ${PORT}`);
});

app.use(express.static('./build'));
app.use(express.static('./build/static'));
console.log(path.resolve())
app.get('*', function(req,res) {
    res.sendFile(path.join(path.resolve(), './build/index.html'));
})

