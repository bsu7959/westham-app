import React, { useCallback, useState, useEffect } from 'react'


export default function ArticleContent(props) {
    const parser = new DOMParser();

    const contentRender = function() {
        console.log(props.article)
        const arr = []

        if(props.article) {

            console.log('article rendering...')
            arr.push(<>
                <h3>{props.article.title}</h3>
                <p>{props.article.date}</p>
                <img src={props.article.img} />
                {
                    props.article.content.map(function(item) {
                        if(item.substr(0,4) == '<img') {
                            const domData = parser.parseFromString(item, 'text/html');
                            return <img src={domData.getElementsByTagName('img')[0].src} />
                        } else return <p>{item}</p>
                    })
                }
            </>);
        }

        return arr;
    }


  return <>
    {contentRender()}
  </>
}
