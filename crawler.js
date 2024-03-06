// const puppeteer = require('puppeteer');
import puppeteer from 'puppeteer';
// import { request } from "./api.js";
const request = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1366,
        height: 800
    });
    await page.goto('https://www.whufc.com/news?category=632&page=0');
}


export { request };