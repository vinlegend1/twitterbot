const Twit = require('twit');
const { tweetIt, tweetCopier } = require('./helper/tweet');

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

tweetCopier(T, ['java']);