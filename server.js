const Twit = require('twit');
const tweetIt = require('./helper/tweet');

// config.js is "git-ignored" and all it has is my api and access token things
const { consumer_key, consumer_secret, access_token, access_token_secret } = require('./config')

// create new Twit object
const T = new Twit({
    consumer_key,
    consumer_secret,
    access_token,
    access_token_secret
});

// const time_break = 1000 * 60;
// let random = Math.floor(Math.random() * 1000);
// setInterval(() => tweetIt(T, "Hello from Node " + random), time_break);

// const stream = T.stream('user', { track: ['python'] });

// stream.on('statuses/filter', (tweet) => {
//     // const name = eventMsg.source.name;
//     // const screenName = eventMsg.source.screen_name;
//     // tweetIt(T, ``)
//     console.log(tweet);
// })
const stream = T.stream('statuses/filter', { track: ['thisissomethingrandom'] })

stream.on('tweet', tweet => {
    let random = Math.floor(Math.random() * 1000)
    const newTweet = tweet ? `${tweet.text} - @${tweet.user.screen_name} P.S. this is a bot. I still have to figure out how to retweet.` : random;
    // console.log(tweet.user.screen_name);
    tweetIt(T, newTweet);
})