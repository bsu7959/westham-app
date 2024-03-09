import React, { useEffect, useState, useCallback } from 'react'

export default function ArticleList(props) {
    
    const [articles, setArticles] = useState(props.articles)
    //setArticles(props.articles);

    function contentRender() {
        console.log(articles)
        console.log(props.articles)
        if(props.articles.length>0) {
            console.log('rendering')
            const arr = [];
                arr.push(<div>
                    {
                        props.articles.map(function(item) {
                            return <div>
                                제목: ${item.title}
                                사진: ${item.img}
                                주소: ${item.link}
                                날짜: ${item.date}
                            </div>
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
