function countWords(inputWords) {
  return inputWords.reduce(function(accumulator, currentWord) {
    accumulator[currentWord] = ++accumulator[currentWord] || 1;
    return accumulator;
  }, {})
}

module.exports = countWords