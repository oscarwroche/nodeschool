function Spy(target, method) {
  var spy = {
    count : 0
  }

  originalFunc = target[method];
  target[method] = function() {
    ++spy['count'];
    return originalFunc.apply(this, arguments);
  }
  return spy
}
    
module.exports = Spy