require('es6-promise');

'use strict';
    
var promise = new Promise(function (fulfill, reject) {
  setTimeout(fulfill, 300);
  fulfill('FULFILLED!');
}).then(console.log);