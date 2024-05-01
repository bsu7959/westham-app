import React, { useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import ArticleList from '../components/ArticleList';
import { articlesRequest } from '../api';
import styled from '@emotion/styled';

const TitleDiv = styled.div`

`;

const SubTitle = styled.p`
    clear: both;
    font-size: 13px;    
    display: flex;
    align-items: center;
    margin: 0;

    &::before {
        background-image: url('./assets/simple-logo.svg');
        background-repeat: no-repeat;
        content: "";
        width: 22px;
        height: 22px;
        display: inline-block;
        padding-right: 10px;
    }
`;

const Title = styled.p`
    font-size: 50px;
    margin: 0;
    line-height: 50px;
`;

export default function Home() {

    console.log("home")
    const [, updateState] = useState();
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
        <TitleDiv>
            <SubTitle>NEWS</SubTitle>
            <Title>Latest</Title>
        </TitleDiv>
        <ArticleList articles={articles}/>
        <Pagination pagination={pagination}/>
        
    </>
}