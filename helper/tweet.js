module.exports = function tweetIt(T, tweetText) {
    T.post('statuses/update', { status: tweetText }, (err, data, response) => {
        console.log(data);
    });
}