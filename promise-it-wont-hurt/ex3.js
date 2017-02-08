var promise = new Promise(function (fulfill, reject) {
  setTimeout(reject, 300);
  reject(new Error('REJECTED!'));
}).then(function () {}, onReject);

function onReject (error) {
  console.log(error.message);
}

// Your solution here