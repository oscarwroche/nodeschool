function getShortMessages(messages) {
  return messages.map(function(object) {return object.message})
                 .filter(function(message) {return message.length < 50})
}

module.exports = getShortMessages