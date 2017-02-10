var http = require('http')
  , fs = require("fs")
  , async = require('async');

var request = function (item, done) {
  var body = "";
  http.get(process.argv[2], function (res) {
  }).on('error'. function (e) {
    done(e, null);
  });
};

async.each([process.argv[2], process.argv[3]], request, function (err) {
  if (err) {
    console.log(err);
  }
});
