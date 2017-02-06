module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(x, y) {
    x.push(fn(y));
    return x;
  }, [])
}