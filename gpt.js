import OpenAI from 'openai';

const apiKey = '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';
const apiEndpoint = 'https://api.openai.com';

const client = new OpenAI({ apiKey: apiKey, apiEndpoint });

const englishArticle = {
    content: [
        'Former West Ham United midfielder Lee Bowyer is the latest guest to share his memories on Iron Cast, the Club’s official podcast!',
        'The ex-England international, who scored four goals in 51 appearances across two spells in east London between 2003-2009, was one of the very few who got to live his boyhood dream of playing for the club he supported. Having originally came through the ranks at east London youth side Senrab FC, he joined West Ham’s Academy at the age of seven, before moving on to Arsenal, and then Charlton Athletic, respectively.',
        'But it was at Leeds United where Bowyer made his name, becoming a mainstay box-to-box midfielder in the team that challenged for the Premier League title and reached the semi-finals of the UEFA Champions League.',
        'And after turning down a life-changing move to Liverpool, he answered the calls for help from his boyhood Club, joining the Hammers on a deal until the end of the 2002/03 season in a bid to avoid relegation.',
        'After suffering that fate, Bowyer joined Newcastle, before rejoining the Irons in 2006 because he felt he had unfinished business to complete in the midst of his storied career.',
        'LISTEN TO THE FULL PODCAST HERE!',
        'Speaking to Iron Cast co-hosts Chris Scull and his former team-mate James Collins, he said: “When I played for the club, it was a massive part of my career to tick off, and 51 appearances disappoints me as I would have liked to played more. I think the first time I arrived I was injured so that didn’t end well, but the second time I came back, I felt people hadn’t seen the real me because I was playing with an injury the first time around so that was a massive part in me coming back.',
        `<img loading="lazy" class="lazyload entered loaded" style="object-fit: cover; object-position: 50% 50%; font-family: 'object-fit:cover;object-position:50% 50%'" sizes="(min-width: 768px) 50vw, 100vw" width="960" height="640" alt="Lee Bowyer speaks on Iron Cast" data-src="https://cdn.whufc.com/sites/default/files/2024-03/bowyer_ironcast.jpg" data-srcset="https://cdn.whufc.com/sites/default/files/styles/cc_320_scale/public/2024-03/bowyer_ironcast.jpg?itok=QygPlFk1 320w, https://cdn.whufc.com/sites/default/files/styles/cc_640_scale/public/2024-03/bowyer_ironcast.jpg?itok=OniWOdNB 640w, https://cdn.whufc.com/sites/default/files/styles/cc_960_scale/public/2024-03/bowyer_ironcast.jpg?itok=eaOXl2MS 960w, https://cdn.whufc.com/sites/default/files/styles/cc_1280_scale/public/2024-03/bowyer_ironcast.jpg?itok=W6VzuyUI 1280w, https://cdn.whufc.com/sites/default/files/styles/cc_1600_scale/public/2024-03/bowyer_ironcast.jpg?itok=P9Cuw6bB 1600w, https://cdn.whufc.com/sites/default/files/styles/cc_2000_scale/public/2024-03/bowyer_ironcast.jpg?itok=iIYWE9fd 2000w" data-ll-status="loaded" srcset="https://cdn.whufc.com/sites/default/files/styles/cc_320_scale/public/2024-03/bowyer_ironcast.jpg?itok=QygPlFk1 320w, https://cdn.whufc.com/sites/default/files/styles/cc_640_scale/public/2024-03/bowyer_ironcast.jpg?itok=OniWOdNB 640w, https://cdn.whufc.com/sites/default/files/styles/cc_960_scale/public/2024-03/bowyer_ironcast.jpg?itok=eaOXl2MS 960w, https://cdn.whufc.com/sites/default/files/styles/cc_1280_scale/public/2024-03/bowyer_ironcast.jpg?itok=W6VzuyUI 1280w, https://cdn.whufc.com/sites/default/files/styles/cc_1600_scale/public/2024-03/bowyer_ironcast.jpg?itok=P9Cuw6bB 1600w, https://cdn.whufc.com/sites/default/files/styles/cc_2000_scale/public/2024-03/bowyer_ironcast.jpg?itok=iIYWE9fd 2000w" src="https://cdn.whufc.com/sites/default/files/2024-03/bowyer_ironcast.jpg">`,
        "“I wasn’t brought up in Canning Town, I was brought up in Poplar, which is not far, but I’m still a big West Ham fan. There were other rumours that me and Nobes [Mark Noble] were related, and he that was my cousin but that wasn’t true either. I’d like that to be true, but unfortunately, he’s not, though my cousin did play with him in the same kids' team coming through at West Ham, so maybe that’s where the link came from.      ",
        '“I used to go as a young kid and watch George Parris, Alan Devonshire, and Billy Bonds when John Lyall was manager, and I was there through the [Frank] McAvennie era as well. I was also at the cup game against Liverpool and the 4-1 win when Paul Ince scored twice. It was a good time.',
        '“When I was a young kid, I was playing at Senrab, and I was picked up by West Ham when I was around seven or eight years old. I spent a few years there before moving on to Arsenal, and then they released me when I was 13 or 14 as I was too small. I ended up going to Charlton, broke through there and played [in the] first team.”',
        'After making his debut for the Addicks at the age of 17, his talent was soon spotted by Premier League side Leeds, and he made a £2.6m move in July 1996, making him the most expensive teenager in English football.',
        'He went on to repay the Elland Road faithful with a 55-goal haul in 265 league and cup outings, while playing in the Champions League semi-final against Valencia in 2001, and earning an England cap in a 1-1 draw with Portugal at Villa Park just over a year later.',
        'The midfielder turned down a new contract at the Whites, and then pulled the plug at the last minute when a £9m move to Liverpool was all but confirmed, eventually joining Glenn Roeder’s Hammers.',
        '“How we didn’t win [the Champions League] is crazy, and it was such a young squad as well that had come through the academy,” said Bowyer. “We had the likes of Ian Hart, Harry Kewell, Jonathan Woodgate, Alan Smith, and Paul Robinson.',
        '"They signed Rio [Ferdinand] from West Ham, [Mark] Viduka, Jimmy Floyd-Hasselbaink, Robbie Fowler. It was ridiculous. We had a great camaraderie and a great group of lads. It was unreal what we had on and off the pitch.',
        '“I was there [at Liverpool] having a medical. It was done. I was thinking to myself I’ve done six years at Leeds, and I’m now going to go to Liverpool for another five years, that’s eleven years away from home and I’m a homely person. I had heard rumours that at Liverpool you couldn’t even talk in the warm-up, so for me it didn’t feel right. But I look back now and it’s the one thing I regret in my whole career, the one thing I look back on and say, ‘I should have done that’ as they went on to win the Champions League. It was a mistake.',
        '“Once Glenn Roeder came knocking, I was set on going back the club I supported as a kid, it was a no brainer. The only problem was that they were bottom once I came. He [Roeder] said come and try help us stay up and my heart overruled my head as realistically I should have never gone there. I had already agreed to join Newcastle in the summer but decided to come and try help West Ham.',
        '“We had some great players. When I arrived, I’m looking in the dressing room and you’ve got Joe Cole, Michael Carrick, Jermain Defoe, David James, Steve Lomas and [Frédéric] Kanouté. What a striker he was. You had [Paolo] Di Canio, who was obviously off the rail a bit, but the talent was unreal.',
        "“I’m thinking, ‘What’s going on here? How are you bottom?' When I turned up it was crazy, it was like a holiday camp. It was mad and I was disappointed. After being there for a few weeks, I could see why they were where they were. I came here as my heart told me to come and try and help but I knew I was struggling. I just physically couldn’t do it, and it killed me.”",
        `<img loading="lazy" class="lazyload entered loaded" style="object-fit: cover; object-position: 50% 50%; font-family: 'object-fit:cover;object-position:50% 50%'" sizes="(min-width: 768px) 50vw, 100vw" width="960" height="615" alt="Lee Bowyer in action for West Ham against Birmingham City" data-src="https://cdn.whufc.com/sites/default/files/2024-03/bowyer_wh.jpg" data-srcset="https://cdn.whufc.com/sites/default/files/styles/cc_320_scale/public/2024-03/bowyer_wh.jpg?itok=olnuYn9i 320w, https://cdn.whufc.com/sites/default/files/styles/cc_640_scale/public/2024-03/bowyer_wh.jpg?itok=57ySaube 640w, https://cdn.whufc.com/sites/default/files/styles/cc_960_scale/public/2024-03/bowyer_wh.jpg?itok=aAcD63AE 960w, https://cdn.whufc.com/sites/default/files/styles/cc_1280_scale/public/2024-03/bowyer_wh.jpg?itok=mnEUFdTW 1280w, https://cdn.whufc.com/sites/default/files/styles/cc_1600_scale/public/2024-03/bowyer_wh.jpg?itok=AmWWSKh5 1600w, https://cdn.whufc.com/sites/default/files/styles/cc_2000_scale/public/2024-03/bowyer_wh.jpg?itok=XMmzrKPn 2000w" data-ll-status="loaded" srcset="https://cdn.whufc.com/sites/default/files/styles/cc_320_scale/public/2024-03/bowyer_wh.jpg?itok=olnuYn9i 320w, https://cdn.whufc.com/sites/default/files/styles/cc_640_scale/public/2024-03/bowyer_wh.jpg?itok=57ySaube 640w, https://cdn.whufc.com/sites/default/files/styles/cc_960_scale/public/2024-03/bowyer_wh.jpg?itok=aAcD63AE 960w, https://cdn.whufc.com/sites/default/files/styles/cc_1280_scale/public/2024-03/bowyer_wh.jpg?itok=mnEUFdTW 1280w, https://cdn.whufc.com/sites/default/files/styles/cc_1600_scale/public/2024-03/bowyer_wh.jpg?itok=AmWWSKh5 1600w, https://cdn.whufc.com/sites/default/files/styles/cc_2000_scale/public/2024-03/bowyer_wh.jpg?itok=XMmzrKPn 2000w" src="https://cdn.whufc.com/sites/default/files/2024-03/bowyer_wh.jpg">`,
        'Bowyer joined Newcastle United following West Ham’s relegation to the First Division, in a deal that was already on the cards prior to his switch to east London. After spending three seasons with the Toon, he decided it was time to move back home, with the weather playing its part in his decision! ',
        '“I had unfinished business at West Ham,” Bowyer said. “I knew Pards [Alan Pardew] and played with him at Charlton. He came knocking in the summer and I’m just a southern lad. I loved my time at Newcastle but it’s so cold. It’s so cold you can’t even keep warm. The weather plays a part up there.',
        '“I was offered a deal up there, but I said I’m going home, and the weather played a big part.',
        '“I brought Kieron [Dyer] and Bellers [Craig Bellamy] with me. He [Dyer] was unfortunate with injuries here as well. It was a moment of madness up there in Newcastle, but it is what it is. I was always green or red, didn’t have an amber.',
        '“What about [Javier] Mascherano not getting into the team? “It just makes me laugh as you’ve got these two Argentinian stars, one was a striker who is going to score you goals and the other is a midfielder who is going to protect you. When they arrived, they weren’t fit, and you could tell they had a nice summer. He couldn’t get a game for us, so left in that January and joined Liverpool and played in the Champions League final that season.',
        "“When [Gianfranco] Zola came in, I thought it was going alright, scoring a goal here and there. The first time I met him he said to me, 'I still have scars from when you kicked me,' and he was being deadly serious. I’m not the brightest but I knew that wasn’t a good start and I ended up leaving in January. He was a lovely man, though, and should have been playing in the team.”",
        'The 47-year-old, who is currently the manager of Caribbean island Montserrat, admitted being a boss was never his ambition, but he now has one, dreaming of taking a team ranked 176th in the world to the 2026 FIFA World C    After nearly three years in charge, he resigned from his position to take up a role at former club Birmingham City, where he spent 16 months.',
        '“It’s a very nice gig, I’m not going to lie,” said Bowyer. “They just approached me. I’ve been offered a few things here and there, but they just weren’t right. I had no intention of being a manager ever and the only reason I went into coaching was to pass on my knowledge as I’ve worked under some unbelievable managers.',
        '“I was supposed to have three games at Charlton, but they said you’ve won them so carry on and we managed to slip into the playo-ffs and then got promotion in my first full season. We went up and they took the budget down.',
        '“I went to Birmingham and that was crazy, but the right thing for me to do as I had a connection with the club. They were bang in trouble and I thought I could help by keeping them up and did so with two games to spare. At the end of the season, they said they had no money and I had to get rid of players to bring some in. I kept them up again and moved on.',
        '“The people of Montserrat have an ambition of getting to the World Cup and I enjoy it as I’m working with a lot of non-league players. Is it going to be tough? Of course it is. We are ranked 176th in the world. When I leave, I’ll leave them in a better place.”'
    ]
};
//console.log(englishArticle.content.length);

const translater = async function (englishArticle) {
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

export { translater };


