var promise = new Promise(function (fulfill, reject) {
  fulfill('PROMISE VALUE');
}).then(console.log);

console.log('MAIN PROGRAM');