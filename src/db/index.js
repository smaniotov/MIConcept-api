const mongoose = require("mongoose")

class DB {
  constructor (databaseHost) {
    this.databaseHost = databaseHost
    this.connection
  }

  connect () {
    this.connection = mongoose.connect(this.databaseHost)
  }
}

module.exports = DB