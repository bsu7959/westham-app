import React, { useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import ArticleList from '../components/ArticleList';
import { articlesRequest } from '../api';

export default function Home() {

    console.log("home")
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const [presentPage, setPresentPage] = useState(80);
    const [articles, setArticles] = useState([]);
    const [pagination, setPagination] = useState([]);
    
    useEffect(() => {
        articlesRequest(presentPage).then((data) => {
            console.log(data)
            setArticles(data[0]);
            setPagination(data[1])
            //forceUpdate();
        })
    },[])
    
    
    return <>
        <Header/>
        <h1>Home</h1>
        <ArticleList articles={articles}/>
        <Pagination pagination={pagination}/>
        
    </>
}