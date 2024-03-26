import React, { useEffect, useState, useCallback } from 'react'
import { Link } from "react-router-dom";

export default function ArticleList(props) {
    
    function contentRender() {
        console.log(props.articles)
        if(props.articles.length>0) {
            console.log('rendering')
            const arr = [];
                arr.push(<div>
                    {
                        props.articles.map(function(item) {
                            return <Link to={'/article'} state={item}>
                                제목: {item.title}
                                사진: {item.img}
                                주소: {item.link}
                                날짜: {item.date}
                            </Link>
                        })
                    }
                </div>)
            console.log(arr)
            return arr;
        }
    }
    
  return <>
      <h1>ArticleList</h1>
        { contentRender() }
  </>

  
}
