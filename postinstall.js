const patchBabel = require("./src/patchBabel");
const patchPackage = require("./src/patchPackage");
const copyConfigFiles = require("./src/copyConfigFiles");
const checkTsConfig = require("./src/checkTsConfig");
const Logger = require("./src/logger");

const logger = new Logger();

patchBabel(logger);
patchPackage(logger);
copyConfigFiles(logger);
checkTsConfig(logger);

logger.flush();
