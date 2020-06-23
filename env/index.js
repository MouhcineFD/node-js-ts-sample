"use strict";

const { resolve } = require("path");
const { config: dotEnvConfig } = require("dotenv");
const defaultEnv = require("./default.json");
const processEnv = process.env;

const dotEnvFileName = processEnv.NODE_ENV ? `.${processEnv.NODE_ENV}.env` : ".env";

dotEnvConfig({ path: resolve(__dirname, dotEnvFileName) });

const env = {};
Object.keys(defaultEnv).forEach((key) => {
  env[key] = processEnv[key] || defaultEnv[key];
});

module.exports = env;
