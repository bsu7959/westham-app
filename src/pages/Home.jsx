import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import * as crawler  from '../crawler';

export default function Home() {
    const [presentPage, setPresentPage] = useState(0);
    const articles = crawler.crawler(presentPage);
    console.log(articles[0])
    return <>
        <Header/>
        <Pagination/>
        <h1>Home</h1>
    </>
}