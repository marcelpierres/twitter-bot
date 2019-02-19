// imports module
var Twit = require('twit');
var config = require('../config'); //import keys

var T = new Twit(config); //Create a new Twit object that allows us to call functions


var params = {
    q: 'men',
    count: 3
} // this is the param variable which will have key and value 

// searches for a tweet containing Params
T.get('search/tweets', params, searchedData);

function searchedData(err, data, response) {
    console.log(data);
}
