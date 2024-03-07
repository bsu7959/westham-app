
import puppeteer from 'puppeteer';

// 기사 목록 크롤링
const request = async (presentPage) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1366,
        height: 5000
    });
    await page.goto(`https://www.whufc.com/news?category=632&page=${presentPage}`);

    const articles = await page.evaluate(() => {
        const articles = [];
        document.querySelectorAll('.o-news-grid__item article').forEach((a) => {
            articles.push({
                title: a.firstElementChild.textContent.trim(),
                link: a.firstElementChild.href,
                img: a.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.src,
                content: '',
            });
        });
        return articles;
    });
    return articles;
}


export { request };