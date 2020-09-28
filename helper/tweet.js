module.exports = {
    tweetIt: function tweetIt(T, tweetText) {
        T.post('statuses/update', { status: tweetText }, (err, data, response) => {
            console.log(data);
        });
    },
    tweetCopier: function tweetCopier(T, trackArr) {
        const stream = T.stream('statuses/filter', { track: trackArr })

        stream.on('tweet', tweet => {
            const random = Math.floor(Math.random() * 1000)
            const newTweet = tweet ? `${tweet.text} - @${tweet.user.screen_name} P.S. this is a bot. I still have to figure out how to retweet.` : random;
            T.post('statuses/update', { status: newTweet }, (err, data, response) => {
                console.log(data);
            });
        })
    }
}