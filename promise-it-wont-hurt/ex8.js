var attachTitle = function () {
  return "DR. " + Array.prototype.slice.call(arguments, 0, 1);
}

var promise = new Promise(function (fulfill, reject) {
  fulfill("MANHATTAN")
}).then(attachTitle).then(console.log)

/*

Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);

*/