// Copyright (c) 2020
//
// Use of this source code is governed by an MIT license that
// can be found in the LICENSE file distributed with this file.

module.exports = {
  ROOT_DIR: "./",
  LOG_FILE: "fbt-cra-typescript-installer.log",
  FILES_TO_COPY: [
    {
      filename: "babel.config.js",
      destination: "./",
      allowOverwrite: false,
    },
    {
      filename: "craco.config.js",
      destination: "./",
      allowOverwrite: false,
    },
    {
      filename: "globals.d.ts",
      destination: "./node_modules/@types/fbt-cra-ts-installer/",
      allowOverwrite: true,
    },
    {
      filename: "index.d.ts",
      destination: "./node_modules/@types/fbt-cra-ts-installer/",
      allowOverwrite: true,
    },
    {
      filename: "fr_FR.json",
      destination: "./translations/",
      allowOverwrite: false,
    },
  ],
  FILES_LOCATION: "./node_modules/fbt-cra-typescript-installer/resources/",
  FBT_SCRIPTS: {
    manifest: "babel-node node_modules/.bin/fbt-manifest --src src",
    "collect-fbts":
      "babel-node node_modules/.bin/fbt-collect --pretty --manifest < .src_manifest.json > .source_strings.json",
    "test-collect-fbts":
      "babel-node node_modules/.bin/fbt-collect --plugins @babel/plugin-syntax-flow --pretty --manifest < .src_manifest.json > .test_source_strings.json",
    "translate-fbts":
      "babel-node node_modules/.bin/fbt-translate --translations translations/*.json --jenkins > src/translatedFbts.json",
    "all-fbts": "yarn manifest && yarn collect-fbts && yarn translate-fbts",
  },
};
