const patchBabel = require("./src/patchBabel");
const patchPackage = require("./src/patchPackage");
const copyConfigFiles = require("./src/copyConfigFiles");
const patchTSConfig = require("./src/patchTSConfig");

patchBabel();
patchPackage();
copyConfigFiles();
patchTSConfig();
