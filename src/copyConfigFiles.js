const fs = require("fs");
const { ROOT_DIR, FILES_LOCATION, FILES_TO_COPY } = require("./constants.js");

module.exports = function () {
  FILES_TO_COPY.forEach((fileInfo) => {
    try {
      fs.mkdirSync(ROOT_DIR + fileInfo.destination);
    } catch (e) {}
    fs.copyFileSync(
      FILES_LOCATION + fileInfo.filename,
      ROOT_DIR + fileInfo.destination + fileInfo.filename
    );
  });
};
