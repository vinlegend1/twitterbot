# Twitter Bot

## Usage
```
$ git clone https://github.com/vinlegend1/twitterbot.git
$ cd twitterbot
$ npm install
$ code .
```

Open the `server.js` file

```javascript
// server.js file
// need to create a config file
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

// call the helper functions here...

```

Create a `config.js` file

```javascript
// in the config.js file
module.exports = {
    consumer_key:         '...',
    consumer_secret:      '...',
    access_token:         '...',
    access_token_secret:  '...'
}
```

## Dependencies
- [twit package](github.com/ttezel/twit)

## Helper Functions
- tweetIt(T: Twit Object, tweetText: String);
- - regular tweet with text message

```javascript
const time_break = 1000 * 60 * 60 * 2; // every 2 hours
setInterval(() => {
    let random = Math.floor(Math.random() * 1000);
    tweetIt(T, "Hello from Node " + random)
}, time_break); // tweet every two hours
```
  
- tweetCopier(T: Twit Object, trackArr)
- - Tweet someone else's tweet with an extra message of "P.S. this is a bot", not to be confused with retweets or quote tweets

```javascript
tweetCopier(T, ['java']);
```
  
- tweetWithImage(T: Twit Object, b64Image, tweetMessage: String, altOfImage: String)
- - Tweet with an Image
- - Implementation:

```javascript
const b64content = fs.readFileSync('./images/khanacademy.jpg', { encoding: 'base64' })
tweetWithImage(T, b64content, "Khan Academy is awesome", "Khan Academy is awesome");
```