import axios from 'axios';

const articlesRequest = async (presentPage) => {
    try {
        console.log('api.js articlesRequest 함수')
        const response = await axios(`http://localhost:8080/articlesRequest?presentPage=${presentPage}`, {
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        })
        console.log(response)
        return response.data;
    } catch (e) {
        console.error(e)
        return [];
    }
}

const articleContentRequest = async (article) => {
    try {
        console.log('api.js articleContentRequest 함수')
        const response = await axios(`http://localhost:8080/content?url=${article.link}`, {
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        })
        console.log(response)
        return response.data;
    } catch (e) {
        console.error(e)
        return [];
    }
}

export { articlesRequest, articleContentRequest }