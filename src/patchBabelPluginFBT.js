const { readFileSync, writeFileSync } = require("fs");

function patchFile(object, logger){
    const {
        locator,
        patchLocator,
        file,
        patch,
        replace
    } = object;

    const FILE_PATH = require.resolve(
        file
    );
    
    let data = readFileSync(FILE_PATH).toString();
    const isAlreadyPatched = data.includes(patchLocator);

    if (isAlreadyPatched) {
        logger.log(
            file.toString() + " already patched"
        );
    return;
    }

    const cantFindMarkerString = !data.includes(locator);

    if (cantFindMarkerString) {
        logger.log(
            "babel-plugin-fbt/FbtConstants.js cannot be patched"
        );
    }

    if(replace){
        writeFileSync(
            FILE_PATH,
            data.replace(
                locator,
                `${patch}`
            )
        );
    } else {
        writeFileSync(
            FILE_PATH,
            data.replace(
            locator,
            `${patch}\n` + locator
            )
        );
    }
    
      data = readFileSync(FILE_PATH).toString();
      if (!data.includes(patchLocator)) {
        logger.log(
          file.toString() + " failed to be patched"
        );
        return;
      }

}

module.exports = function (logger) {

    let array = [
        {
            locator: "FbtRequiredAttributes,",
            patchLocator: "FbtIgnoredAttributes,",
            file: "babel-plugin-fbt/FbtConstants.js",
            patch: `FbtIgnoredAttributes,`,
            replace: false
           
        },
        {
            locator: "ValidFbtOptions,",
            patchLocator: "IgnoredParamOptions,",
            file: "babel-plugin-fbt/FbtConstants.js",
            patch: `IgnoredParamOptions,`,
            replace: false
        },
        {
            locator: "const ValidParamOptions = {",
            patchLocator: "const IgnoredParamOptions = {",
            file: "babel-plugin-fbt/FbtConstants.js",
            patch:
            `const IgnoredParamOptions = {
                __self: true,
                ...RequiredParamOptions,
              };`,
            replace: false
        },
        {
            locator: "const PronounRequiredAttributes = {",
            patchLocator: "const FbtIgnoredAttributes = {",
            file: "babel-plugin-fbt/FbtConstants.js",
            patch: 
            `const FbtIgnoredAttributes = {
                __self: true,
                ...FbtRequiredAttributes,
            };`,
            replace: false
        },
        
        {
            locator: "FbtRequiredAttributes,",
            patchLocator: "FbtIgnoredAttributes, // fix to get FbtParam to work",
            file: "babel-plugin-fbt/babel-processors/JSXFbtProcessor.js",
            patch: `FbtIgnoredAttributes, // fix to get FbtParam to work`,
            replace: true
        },
        {
            locator: "FbtRequiredAttributes,",
            patchLocator: "FbtIgnoredAttributes, // fix to get FbtParam to work, continued",
            file: "babel-plugin-fbt/babel-processors/JSXFbtProcessor.js",
            patch: `FbtIgnoredAttributes, // fix to get FbtParam to work, continued`,
            replace: true
        },
        {
            locator: "RequiredParamOptions,",
            patchLocator: "IgnoredParamOptions, // fix to get FbtParam to work",
            file: "babel-plugin-fbt/getNamespacedArgs.js",
            patch: "IgnoredParamOptions, // fix to get FbtParam to work",
            replace: true
        },
        {
            locator: "RequiredParamOptions,",
            patchLocator: "IgnoredParamOptions, // fix to get FbtParam to work, continued",
            file: "babel-plugin-fbt/getNamespacedArgs.js",
            patch: "IgnoredParamOptions, // fix to get FbtParam to work, continued",
            replace: true  
        }
    ];

    array.forEach(param => {
        patchFile(param, logger);
    });

    
  }
