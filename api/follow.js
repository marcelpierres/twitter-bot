// imports module
var Twit = require('twit');
var config = require('../config'); //import keys

var T = new Twit(config); //Create a new Twit object that allows us to call functions


var params = {
    status: 'Tweeted from API TEST'
} // this is the param variable which will have key and value 

var stream = T.stream('user')

stream.on('follow', onFollowed)
stream.on('error', onError)


function onFollowed(event) {
    console.log('Follow event');
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;
    tweetMessage('@' + screenName + "Thank you for following me " + name);
};