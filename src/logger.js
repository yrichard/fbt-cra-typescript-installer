const { writeFileSync } = require("fs");
const { ROOT_DIR, LOG_FILE } = require("./constants");

class Logger {
  constructor() {
    this.logs = [];
  }
  log(message) {
    this.logs.push(message);
  }
  flush() {
    if (this.logs.length === 0) {
      return;
    }
    writeFileSync(ROOT_DIR + LOG_FILE, this.logs.join("\n"));
  }
}

module.exports = Logger;
