// Copyright (c) 2020 by Yohann Richard
//
// Use of this source code is governed by an MIT license that
// can be found in the LICENSE file distributed with this file.

const { readFileSync, writeFileSync } = require("fs");
const { ROOT_DIR } = require("./constants.js");
const { format } = require("prettier-package-json");

const fbtScripts = {
  manifest: "babel-node node_modules/.bin/fbt-manifest --src src",
  "collect-fbts":
    "babel-node node_modules/.bin/fbt-collect --pretty --manifest < .src_manifest.json > .source_strings.json",
  "test-collect-fbts":
    "babel-node node_modules/.bin/fbt-collect --plugins @babel/plugin-syntax-flow --pretty --manifest < .src_manifest.json > .test_source_strings.json",
  "translate-fbts":
    "babel-node node_modules/.bin/fbt-translate --translations translations/*.json --jenkins > src/translatedFbts.json",
  "all-fbts": "yarn manifest && yarn collect-fbts && yarn translate-fbts",
};

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
    ...scripts,
    ...fbtScripts,
  };

  writeFileSync(FILE_PATH, format(package, {}));
};
