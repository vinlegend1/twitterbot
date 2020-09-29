const Twit = require('twit');
const { tweetIt, tweetCopier, tweetWithImage } = require('./helper/tweet');
const fs = require('fs');

// config.js is "git-ignored" and all it has is my api and access token things
const { consumer_key, consumer_secret, access_token, access_token_secret } = require('./config')

// create new Twit object
const T = new Twit({
    consumer_key,
    consumer_secret,
    access_token,
    access_token_secret
});

// tweetIt Implementation with setInterval()

// const time_break = 1000 * 60;
// let random = Math.floor(Math.random() * 1000);
// setInterval(() => tweetIt(T, "Hello from Node " + random), time_break);

// tweetCopier Implementation

// tweetCopier(T, ['java']);

// tweetWithImage Implementation

// const b64content = fs.readFileSync('./images/khanacademy.jpg', { encoding: 'base64' })
// tweetWithImage(T, b64content, "Hello this is annother image", "Khan Academy is awesome");

