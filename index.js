var Promise = require("promise");
var newsparser = require("./utilities/newsparser");
var news = require("./api/news");
var post = require("./api/post");
var follow = require("./api/follow");
var verify = require("./api/verify");

var info;

verify.verify();
function speak() {
  news.news().then(result => {
    post.post(result);
  });
}
setInterval(speak, 1000 * 20);
