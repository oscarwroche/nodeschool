function loadUsers(userIds, load, done) {
    var users = []
    userIds.forEach(function (id, index) {
      load(id, function(user) {
        users[index] = user
      })
    })
  }
  
  module.exports = loadUsers