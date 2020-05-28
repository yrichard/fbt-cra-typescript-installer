const { readFileSync, writeFileSync } = require("fs");
const { ROOT_DIR } = require("./constants.js");
const { format } = require("prettier-package-json");

// Patch Babel
module.exports = function () {
  const FILE_PATH = ROOT_DIR + "tsconfig.json";
  let rawdata = readFileSync(FILE_PATH);

  const tsconfig = JSON.parse(rawdata) || {};
  tsconfig.compilerOptions = tsconfig.compilerOptions || {};
  tsconfig.compilerOptions.baseUrl = tsconfig.compilerOptions.baseUrl || "./";
  tsconfig.compilerOptions.paths = tsconfig.compilerOptions.paths || {};
  tsconfig.compilerOptions.paths["*"] =
    tsconfig.compilerOptions.paths["*"] || [];

  if (tsconfig.compilerOptions.paths["*"].indexOf("./src/@types/*") === -1) {
    tsconfig.compilerOptions.paths["*"].push("./src/@types/*");
  }

  writeFileSync(FILE_PATH, format(tsconfig, {}));
};
