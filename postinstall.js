#! /usr/bin/env node

const patchBabel = require("./src/patchBabel");
const patchPackage = require("./src/patchPackage");
const copyConfigFiles = require("./src/copyConfigFiles");
const checkTsConfig = require("./src/checkTsConfig");
const Logger = require("./src/logger");

const logger = new Logger();
const parameters = process.argv.slice(2);
const hasNoParam = parameters.length == 0;

if(hasNoParam || parameters.indexOf("--patchBabel") != -1) patchBabel(logger);
if(hasNoParam || parameters.indexOf("--patchPackage") != -1) patchPackage(logger);
if(hasNoParam || parameters.indexOf("--copyConfigFiles") != -1) copyConfigFiles(logger);
if(hasNoParam || parameters.indexOf("--checkTsConfig") != -1) checkTsConfig(logger);

logger.flush();
