

const express = require('express');
const path = require('path');
const crawler = require('./crawler.js');
const translater = require('./translater.js');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 8080;
// const articles = await request(0);
// console.log(articles);
// const content = await contentRequest({
//     title: 'Iron Cast | Lee Bowyer on fulfilling his childhood dream, returning to the Hammers and managing Montserrat',
//     link: 'https://www.whufc.com/news/iron-cast-lee-bowyer-fulfilling-his-childhood-dream-returning-hammers-and-managing-montserrat',
//     img: 'https://cdn.whufc.com/sites/default/files/2024-03/bowyerpodcast.jpg',
//     date: '5th March 2024',
    
// })
// console.log(content);


app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./build'));
app.use(express.static('./build/static'));

app.listen(PORT, function() {
    console.log(`listening on ${PORT}`);
});

// 기사목록 불러오기
app.get('/articlesRequest', async function(req,res) {
    //console.log(req.query.presentPage)
    const articles = await crawler.articlesRequest(req.query.presentPage);
    res.send(articles);
})

// 기사 내용 불러오기
app.get('/content', async function(req,res) {
    const content = await crawler.contentRequest(req);
    res.send(content);
})

app.get('*', function(req,res) {
    res.sendFile(path.join(path.resolve(), './build/index.html'));
})