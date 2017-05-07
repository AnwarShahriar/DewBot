var Twit = require('twit')
var bot = new Twit({
    consumer_key: process.env.DEWBOT_CONSUMER_KEY,
    consumer_secret: process.env.DEWBOT_CONSUMER_SECRET,
    access_token: process.env.DEWBOT_ACCESS_TOKEN,
    access_token_secret: process.env.DEWBOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000 // 1 minute timeout
})

bot.get('followers/ids', {screen_name: 'anwarshahriar'}, function (err, data, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});