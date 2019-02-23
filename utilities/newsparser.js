var Promise = require("promise");
module.exports.newsparser = function(data) {
  var title = data.articles[0].title;
  var url = data.articles[0].url;
  var info = [title, url];
  return info;
};
