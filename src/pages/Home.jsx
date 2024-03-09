import React, { useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import ArticleList from '../components/ArticleList';
import { articlesRequest } from '../api';

export default function Home() {

    console.log("home")
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const [presentPage, setPresentPage] = useState(1);
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        articlesRequest(presentPage).then((data) => {
            setArticles(data);
            //forceUpdate();
        })
    },[])
    useEffect(() => {

    },[articles])
    console.log(articles)
    // const article = await articlesRequest(presentPage);
    // setArticles(article);

    // console.log(articles)
    
    
    return <>
        <Header/>
        <h1>Home</h1>
        <ArticleList articles={articles}/>
        <Pagination/>
        
    </>
}