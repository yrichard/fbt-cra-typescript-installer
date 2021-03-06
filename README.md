<h1 align="center">
  <img src="https://facebook.github.io/fbt/img/fbt.png" height="150" width="150" alt="FBT"/>
</h1>

## Requirements

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Babel](https://babeljs.io/)

## FBT API For React Deployed with CRA and Typescript

This module will help you deploy the FBT API on top of a vanilla React App that was installed using "create-react-app" and typescript.

For a full setup:

### Create a new React App using CRA:

`npx create-react-app my-fbt-app --template typescript`

`cd my-fbt-app`

### Install the fbt-cra-typescript-installer module:

`yarn add fbt-cra-typescript-installer`

### Install fbt-cra-ts

`yarn run fbt-cra-ts-install`

### Run the fbt scripts

`yarn all-fbts`

### Start the application to make sure everything works: 

`yarn start`

### Something doesn't work?

See if there's anything interesting in the log file fbt-cra-typescript-installer.log (only created if the script finds something unexpected).

## More documentations:

### Full documentation

https://facebook.github.io/fbt

### Tips on how to use FBT's advanced features with TypeScript:

https://dev.to/retyui/how-to-add-support-typescript-for-fbt-an-internationalization-framework-3lo0

### Step by step deployment of FBT with CRA and typescript:

https://medium.com/@frenchyooy/configuring-fbt-api-with-typescript-and-react-create-app-492ee72f44bb

### FBT Components

For FBT Parameters and Interpolation, use &lt;FbtParam&gt; or FbtParam( ... );

For FBT Name, use &lt;FbtName&gt; or FbtName( ... );

For FBT Same Parameter, use &lt;FbtSameParam&gt; or FbtSameParam( ... );

For FBT Enumerations, use &lt;FbtEnum&gt; or FbtEnum( ... );

### As of July 20, 2020, FBTPlural and FBTPronoun are not functional