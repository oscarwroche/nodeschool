var parsePromised = function (json) {
  return new Promise (function (fulfill, reject) {
    try {
      fulfill(JSON.parse(json));
    } catch (e) {
      reject(e);
    }
  })
}

parsePromised(process.argv[2]).then(console.log).catch(console.log);