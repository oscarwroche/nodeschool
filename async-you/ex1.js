var http = require('http')
  , fs = require("fs")
  , async = require('async');

async.waterfall([readUrl, getUrl], function(e, d) {
  if (d) {
    console.log(d);
  }
  else {
    console.log(e)
  }
});

function readUrl(cb) {
  fs.readFile(process.argv[2], function (e, d) {
    if (e) {
      cb(e, null);
    }
    else {
      cb(null, d.toString());
    }
  })
};

function getUrl(url, cb) {
  var body = "";
  http.get(url, function(res) {
    res.on("data", function (chunk) { body += chunk; });
    res.on("end", function () {
      cb(null, body);
    });
  })
};

