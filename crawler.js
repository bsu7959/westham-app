
//import puppeteer from 'puppeteer';
const puppeteer = require('puppeteer');

// 기사 목록 크롤링
exports.articlesRequest = async (presentPage) => {
    console.log('crawler.js')
    console.log(presentPage)
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1366,
        height: 50000
    });
    await page.goto(`https://www.whufc.com/news?category=632&page=${presentPage}`);

    // 기사목록
    const articles = await page.evaluate(() => {
        const articles = [];
        // const pagination = [];

        // document.querySelectorAll('m-pagination__items').forEach((li) => {
        //     console.log("dd")
        //     pagination.push(li.textContent.trim());
        // })
        // console.log(pagination)
        document.querySelectorAll('.o-news-grid__item article').forEach((a) => {
            articles.push({
                title: a.firstElementChild.textContent.trim(),
                link: a.firstElementChild.href,
                img: a.querySelector('img').src,
                date: a.querySelector('.m-teaser__content-info .m-teaser__content-publish-date').textContent.trim(),
                content: [],
            });
        });
        return articles;
    });

    // 하단 pagination 정보
    const pagination = await page.evaluate(() => {
        const pagination = [];
        document.querySelectorAll('.m-pagination__items li a').forEach((a) => {
            //pagination.push(a.textContent.trim());
            if(a.querySelector('span').textContent == 'Next page') {
                pagination.push(0)
            }else if(a.querySelector('span').textContent == 'Previous page') {
                pagination.push(-1)
            }else {
                pagination.push(a.firstElementChild.nextSibling.textContent)
            }
        })
        return pagination;
    })
    //console.log(pagination)
    
    return [articles, pagination];
}

exports.contentRequest = async (article) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1900,
        height: 5000
    });
    await page.goto(article.link);  // 나중에 지울 것

    const content = await page.evaluate(() => {
        const content = [];
        document.querySelectorAll('article .m-article__content').forEach((a) => {
            let item = a.firstElementChild;

            while(item) {
                console.log(item.tagName);
                switch(item.tagName) {
                    case 'DIV':
                        if(item.classList[0] == 'paragraph') break;
                        item.querySelectorAll('.field__item p').forEach((a) => {
                            content.push(a.textContent); 
                        })
                        break;
                    case 'FIGURE':
                        item.querySelectorAll('img').forEach((a) => {
                            content.push(a.outerHTML);
                        })
                        break;
                    default:
                        break;
                }
                
                item = item.nextElementSibling;
            }
            // a.querySelectorAll('.field__item').forEach((a) => {
            //     console.log(a);
            // })
            // a.querySelectorAll('figure img').forEach((a) => {
            //     console.log(a.src)
            // })
            // console.log(content)

        });

        return content;
    });
    return {
        title: article.title,
        link: article.link,
        img: article.img,
        date: article.date,
        content: content,
    };
}

// export { request, contentRequest };