import React, { useState, useEffect } from 'react'
import Header from '../components/Header';
import ArticleContent from '../components/ArticleContent';
import { useLocation } from 'react-router-dom';
import { articleContentRequest } from '../api';



export default function Article() {
  const location = useLocation();
  const [presentArticle, setPresentArticle] = useState();
  const [, updateState] = useState();
  let isData = false;
  //console.log(presentArticle)


//   useEffect(() => {
//     setPresentArticle(location.state);
//     console.log(presentArticle);

// },[location.state])

  useEffect(() => {
    articleContentRequest(location.state).then((data) => {
      console.log(location.state)
        console.log(data)
        const temp = location.state;
        temp.content = data.content;
        isData = true;
        setPresentArticle({
          ...temp,
        });
        console.log(presentArticle)
    })
  },[])

  useEffect(() => {
    updateState();
  },[isData])


  return <>
    <Header/>
    <ArticleContent article={presentArticle}/>
  </>
}
