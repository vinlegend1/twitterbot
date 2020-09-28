const Twit = require('twit');

// config.js is "git-ignored" and all it has is my api and access token things
const { consumer_key, consumer_secret, access_token, access_token_secret } = require('./config')

// create new Twit object
const T = new Twit({
    consumer_key,
    consumer_secret,
    access_token,
    access_token_secret
});

// T.post('statuses/update', { status: 'hello world!' }, (err, data, response) => {
//     console.log(data);
// });

T.get('search/tweets', { q: 'banana since:2011-07-11', count: 2 }, function(err, data, response) {
    console.log(data)
});

// const stream = T.stream('statuses/filter', { track: '#apple', language: 'en' })
 
// stream.on('tweet', tweet => {
//   console.log(tweet)
// })