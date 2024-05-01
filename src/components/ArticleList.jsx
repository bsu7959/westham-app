import React, { useEffect, useState, useCallback } from 'react'
import { Link } from "react-router-dom";
import styled, { keyframes } from '@emotion/styled';
import ArticleCard from './ArticleCard';


const Container = styled.div`
display: flex;
flex-wrap: wrap;
flex-basis: auto;
padding-right: 60px;
`;




export default function ArticleList(props) {
    
    function contentRender() {
        console.log(props.articles)
        if(props.articles.length>0) {
            console.log('rendering')
            const arr = [];
                arr.push(<Container>
                    {
                        props.articles.map(function(item) {
                            return  <ArticleCard item={item}/>
                            // <Link to={'/article'} state={item}>
                            //     제목: {item.title}
                            //     사진: {item.img}
                            //     주소: {item.link}
                            //     날짜: {item.date}
                            // </Link>

                        })
                    }
                </Container>)
            console.log(arr)
            return arr;
        }
    }
    
  return <>
        { contentRender() }
  </>

  
}
