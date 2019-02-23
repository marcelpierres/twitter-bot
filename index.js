var news = require("./api/news");
var Promise = require("promise");
var newsparser = require("./utilities/newsparser");
var post = require("./api/post");

var info;
news.news().then(result => {
  info = result;
  post.post(info);
});
