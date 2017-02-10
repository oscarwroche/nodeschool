var http = require('http')
  , fs = require("fs")
  , async = require('async');

var request1 = function(done) {
  var body = "";
  http.get(process.argv[2], function (res) {
    res.on("data", function (chunk) { body += chunk; });
    res.on("end", function () {
      done(null, body);
    });
  });
};

var request2 = function(done) {
  var body = "";
  http.get(process.argv[3], function (res) {
    res.on("data", function (chunk) { body += chunk; });
    res.on("end", function () {
      done(null, body);
    });
  });
};

async.series({
  requestOne: request1,
  requestTwo: request2
}, function(err, results){
  console.log(results);
  // results will be {one: 1, two: 2}
});
