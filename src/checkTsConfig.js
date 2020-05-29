const { readFileSync, existsSync } = require("fs");
const { ROOT_DIR } = require("./constants");

module.exports = function (logger) {
  const FILE_PATH = ROOT_DIR + "tsconfig.json";
  if (!existsSync(FILE_PATH)) {
    logger.log("tsconfig.json not found");
    return;
  }

  let rawdata = JSON.parse(readFileSync(FILE_PATH));

  if (rawdata.compilerOptions && rawdata.compilerOptions.noUnusedLocals) {
    logger.log(
      "tsconfig.json has noUnusedLocals, this is incompatible with fbt at this time."
    );
  }
};
