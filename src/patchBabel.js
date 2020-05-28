// Copyright (c) 2020
//
// Use of this source code is governed by an MIT license that
// can be found in the LICENSE file distributed with this file.

const { readFileSync, writeFileSync } = require("fs");

// Patch Babel
module.exports = function () {
  const patch = `
    // Small fix to stop removing \`import fbt from 'fbt';\`
    if (binding.identifier.name === 'fbt') {
      return false;
    }
  `;

  const FILE_PATH = require.resolve(
    "@babel/plugin-transform-typescript/lib/index.js"
  );

  const data = readFileSync(FILE_PATH).toString();
  const isAlreadyPatched = data.includes("binding.identifier.name === 'fbt'");

  if (isAlreadyPatched) {
    process.exit(0);
  }

  writeFileSync(
    FILE_PATH,
    data.replace(
      "if (binding.identifier.name !== jsxPragma) {",
      `${patch}\nif (binding.identifier.name !== jsxPragma) {`
    )
  );
};
