import axios from 'axios';

const articlesRequest = async (presentPage) => {
    try {
        let result;
        console.log('api.js articlesRequest 함수')
        //const articles = [];
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

export { articlesRequest }