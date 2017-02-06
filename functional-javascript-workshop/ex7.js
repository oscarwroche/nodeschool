function reduce(arr, fn, initial) {
  return arr.length ? reduce(arr.slice(1), fn, fn(arr[0],initial)) : initial;
}

module.exports = reduce