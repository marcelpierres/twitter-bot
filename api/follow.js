// imports module
var Twit = require("twit");
var config = require("../config"); //import keys
var Promise = require("promise");

var T = new Twit(config); //Create a new Twit object that allows us to call functions

follow();
async function follow() {
  var params = {
    status: "Tweeted from API TEST"
  }; // this is the param variable which will have key and value

  let stream = await T.stream("user");

  stream.on("follow", onFollowed);
  stream.on("error", onError);
}
function onFollowed(event) {
  console.log("Follow event");
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetMessage("@" + screenName + "Thank you for following me " + name);
}

function onError(event) {
  console.log("Fail");
}
