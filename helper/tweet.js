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
    },
    tweetWithImage: function tweetWithImage(T, b64contentImage, tweetMessage, altOfImage) {

        T.post('media/upload', { media_data: b64contentImage }, (err, data, response) => {

            // now we can assign alt text to the media, for use by screen readers and
            // other text-based presentations and interpreters

            const mediaIdStr = data.media_id_string
            const altText = altOfImage;
            const meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
          
            T.post('media/metadata/create', meta_params, (err, data, response) => {
              if (!err) {
                // now we can reference the media and post a tweet (media will attach to the tweet)
                const params = { status: tweetMessage, media_ids: [mediaIdStr] }
          
                T.post('statuses/update', params, (err, data, response) => {
                  console.log(data)
                })

              } else {
                  console.log("crap");
              }
            });

        });

    }
}