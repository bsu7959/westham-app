import React from 'react'

export default function Pagination(props) {

  function contentRender() {
    console.log(props.pagination)
      if(props.pagination.length>0) {
          console.log('pagination rendering')
          const arr = [];
              arr.push(<ul>
                  {
                      props.pagination.map(function(item) {
                        if(item == -1) {
                          return <li>
                            prev
                          </li>
                        }else if(item == 0) {
                          return <li>
                            next
                          </li>
                        }else {
                          return <li>
                            {item}
                          </li>
                        }
                          
                      })
                  }
              </ul>)
          console.log(arr)
          return arr;
      }
  }
  
  return <>
        {contentRender()}
    </>
}
