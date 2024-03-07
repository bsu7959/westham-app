
import express from 'express';
import path from 'path';
import { request, contentRequest } from './crawler.js';
const app = express();
const PORT = 8080;
//const articles = await request(0);
//console.log(articles);
const content = await contentRequest({
    title: 'Iron Cast | Lee Bowyer on fulfilling his childhood dream, returning to the Hammers and managing Montserrat',
    link: 'https://www.whufc.com/news/iron-cast-lee-bowyer-fulfilling-his-childhood-dream-returning-hammers-and-managing-montserrat',
    img: 'https://cdn.whufc.com/sites/default/files/2024-03/bowyerpodcast.jpg',
    date: '5th March 2024',
    
})
console.log(content);

app.listen(PORT, function() {
    console.log(`listening on ${PORT}`);
});

app.use(express.static('./build'));
app.use(express.static('./build/static'));
console.log(path.resolve())
app.get('*', function(req,res) {
    res.sendFile(path.join(path.resolve(), './build/index.html'));
})

