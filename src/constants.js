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
