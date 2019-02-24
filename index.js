var Promise = require("promise");
var newsparser = require("./utilities/newsparser");
var news = require("./api/news");
var post = require("./api/post");
var verify = require("./api/verify");

var count = 0;

verify.verify();

function speak() {
  news.news().then(result => {
    post.post(result);
  });
}

function daypost() {
  count += 1;
  var tweet = "Day " + count + " Posting from Akua's Word :)";
  post.post(tweet);
}
daypost();
setInterval(daypost, 1000 * 60 * 60 * 24);
setInterval(speak, 1000 * 60 * 60 * 6);
