// Thanks to Mur Amur for publishing these steps.
// https://dev.to/retyui/how-to-add-support-typescript-for-fbt-an-internationalization-framework-3lo0

const { readFileSync, writeFileSync } = require("fs");

// Patch Babel
module.exports = function (logger) {
  const patch = `
    // Small fix to stop removing \`import fbt from 'fbt';\`
    if (binding.identifier.name === 'fbt') {
      return false;
    }
  `;

  const locator = "if (binding.identifier.name !== jsxPragma) {";
  const patchLocator = "binding.identifier.name === 'fbt'";

  const FILE_PATH = require.resolve(
    "@babel/plugin-transform-typescript/lib/index.js"
  );

  let data = readFileSync(FILE_PATH).toString();
  const isAlreadyPatched = data.includes(patchLocator);

  if (isAlreadyPatched) {
    logger.log(
      "@babel/plugin-transform-typescript/lib/index.js already patched"
    );
    process.exit(0);
  }

  const cantFindMarkerString = !data.includes(locator);

  if (cantFindMarkerString) {
    logger.log(
      "@babel/plugin-transform-typescript/lib/index.js cannot be patched"
    );
  }

  writeFileSync(
    FILE_PATH,
    data.replace(
      locator,
      `${patch}\nif (binding.identifier.name !== jsxPragma) {`
    )
  );

  data = readFileSync(FILE_PATH).toString();
  if (!data.includes(patchLocator)) {
    logger.log(
      "@babel/plugin-transform-typescript/lib/index.js failed to be patched"
    );
    process.exit(0);
  }
};
