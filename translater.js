// import OpenAI from 'openai';
// import { apiKeys } from './key.js';
const OpenAI = require('openai');
const apiKeys = require('./key.js');

const apiEndpoint = 'https://api.openai.com';


const client = new OpenAI({ apiKey: apiKeys.gptApiKey, apiEndpoint });

//console.log(englishArticle.content.length);

// 기사 내용 번역
exports.translater = async function (englishArticle) {
    const result = [];

    for (let i = 0; i < englishArticle.content.length; i++) {
        if (englishArticle.content[i][0] == '<') result.push(englishArticle.content[i]);
        else {
            const params = {
                model: 'gpt-3.5-turbo',
                messages: [{'role':'user', 'content':`Translate the following English text to Korean:\n\n${englishArticle.content[i]}`,}],
                temperature:0.7,
            }

            await client.chat.completions.create(params)
            .then(response => {
                result.push(response.choices[0].message.content)
                console.log(response.choices[0]);
            })

            .catch(error => {
                console.log(error);
            })
        }
    }



    console.log('******************************\n')
    //console.log(result);
    return result;
}


// 기사 목록 번역
exports.articlesTranslater = async function(req) {
    const articles = [];
    const result = [];
    req.forEach(el => {
        articles.push({
            title: el.title,
            date: el.date,
        })
    });

    const params = {
        model: 'gpt-3.5-turbo',
        messages: [{'role':'user', 'content':`Translate the following English text to Korean:\n\n${JSON.stringify(articles)}`,}],
        temperature:0.7,
    }
    console.log(params)

    await client.chat.completions.create(params)
    .then(response => {
        result.push(response.choices[0].message.content)
        console.log(response.choices[0]);
    })

    .catch(error => {
        console.log(error);
    })
    return result;
}

//const res = await articlesTranslater(data);

// export { translater, articlesTranslater };