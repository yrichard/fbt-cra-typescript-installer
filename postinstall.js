const patchBabel = require("./src/patchBabel");
const patchPackage = require("./src/patchPackage");
const copyConfigFiles = require("./src/copyConfigFiles");

patchBabel();
patchPackage();
copyConfigFiles();
