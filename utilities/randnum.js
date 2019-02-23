var Chance = require("chance");
function randnum(data) {
  var length = data.length - 1;
  var chance = new Chance();

  var i = chance.integer({ min: 0, max: length });

  return i;
}

module.exports.randnum = randnum;
