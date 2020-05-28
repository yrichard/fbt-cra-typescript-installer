// Copyright (c) 2020
//
// Use of this source code is governed by an MIT license that
// can be found in the LICENSE file distributed with this file.

const { readFileSync, writeFileSync } = require("fs");
const { ROOT_DIR, FBT_SCRIPTS } = require("./constants.js");
const { format } = require("prettier-package-json");

// Patch Babel
module.exports = function () {
  const FILE_PATH = ROOT_DIR + "package.json";
  let rawdata = readFileSync(FILE_PATH);

  const package = JSON.parse(rawdata);
  let scripts = package.scripts || {};
  for (let scriptName in scripts) {
    scripts[scriptName] = scripts[scriptName].replace(
      "react-scripts ",
      "craco "
    );
  }

  package.scripts = {
    ...FBT_SCRIPTS,
    ...scripts,
  };

  writeFileSync(FILE_PATH, format(package, {}));
};
