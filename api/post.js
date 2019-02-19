// imports module
var Twit = require('twit');
var config = require('../config'); //import keys

var T = new Twit(config); //Create a new Twit object that allows us to call functions


var params = {
    status: 'Tweeted from API TEST'
} // this is the param variable which will have key and value 

// posts the tweet
T.post('statuses/update', params, tweeted)

function tweeted(err, data, response) {
    if (err) {
        console.log("Error");
    }
    else {
        console.log("Success");
    }
} // 