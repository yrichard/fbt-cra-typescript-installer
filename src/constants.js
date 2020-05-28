// Copyright (c) 2020
//
// Use of this source code is governed by an MIT license that
// can be found in the LICENSE file distributed with this file.

module.exports = {
  ROOT_DIR: "../../",
  FILES_TO_COPY: [
    {
      filename: "babel.config.js",
      destination: "./",
    },
    {
      filename: "craco.config.js",
      destination: "./",
    },
    {
      filename: "globals.d.ts",
      destination: "./src/@types/",
    },
    {
      filename: "index.d.ts",
      destination: "./src/@types/",
    },
    {
      filename: "fr_FR.json",
      destination: "./translations/",
    },
  ],
  FILES_LOCATION: "./resources/",
};
