//const axios = require('axios');
import axios, * as others from 'axios';
import cheerio, * as otherss from 'cheerio';
import proxy from './setupProxy';
//const cheerio = require('cheerio');

// https://www.whufc.com/news  https://www.whufc.com/news?category=632&page=0

export async function crawler(presentPage) {
    proxy();
    console.log("현재" + presentPage)
    const html = await axios.get(`/api`);
    let ulList = [];
    const $ = cheerio.load(html.data);
    const bodyList = $('.o-news__listing article .m-teaser__link');
    bodyList.map((i, element) => {
        ulList[i] = {
            title: element.textContent.trim(),
            link: element.href,
            img: '',
            content: '',
        }
    });
    console.log("list", ulList);
    return ulList;
}