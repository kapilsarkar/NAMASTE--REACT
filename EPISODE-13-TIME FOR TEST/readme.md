### EPISODE-13(TIME FOR TEST) :

### Topics Covered :

- This section covers various types of testing from a developer's perspective:

   - Manual Testing: Testing features manually by interacting with the application.
   - Unit Testing: Testing individual units/components in isolation.
   - Integration Testing: Testing multiple units/components together to ensure they work as a group.
   - End-to-End (E2E) Testing: Simulating real user scenarios to test the complete flow of the application.

### Setting Up Testing in a React App :

 - To enable testing in a React application, the following steps are involved:

    - React Testing Library is used to test components in a way that mimics user behavior.
    - Jest is the test runner and assertion library used to run and manage tests.
    - Babel is configured to transpile modern JavaScript and JSX code so that Jest can understand it.
    - Parcel Configuration (if using Parcel as the bundler) needs adjustment to disable its default Babel transpilation so custom Babel settings can take effect.
    - Jest Initialization involves setting up configuration options to suit the project’s needs.
    - JSDOM is used to simulate a browser-like environment for testing React components.
    - Testing the Setup ensures that Jest and the testing libraries are correctly integrated and functioning as expected.
    
This setup allows writing and running meaningful tests for a robust React application.

### ASSIGNMENT QUESTIONS WITH ANSWERS (THEORY) :

### THEORY ASSIGNMENT :


 ### Types of testing (devloper)
- Unit Testing: Testing one unit or one component in isolation, is known as Unit Testing.
- Integration Testing: Integration Testing the integration of the component.
- End to End Testing - e2e testing: Testing a react application as soon as user lands on the website   to  the user leaves the website, is known as End to End(e2e) Testing.


### Setting up Testing in our app
- Installed React Testing Library

`npm install -D @testing-library/react`

- Install jest

`npm install -D jest`

- Install Babel dependencies

`npm install --save-dev babel-jest @babel/core @babel/preset-env`

- Configure Babel

```
// babel.config.js
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
```
- Configure Parcel Config file(.parcelrc) to disable default babel transpilation
```
// .parcelrc
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```
- Command to run test cases

`npm run test`

- Jest Configuration: Initialize the Jest, it will create new Jest Configuration file(jest.config.js)

`npx jest --init`

- Install jsdom Library

`npm install --save-dev jest-environment-jsdom`

- Install @babel/preset-react to make JSX work in test cases

`npm install @babel/preset-react`

- Include @babel/preset-react inside my babel.config.js file - @babel/preset-react helping our testing library to convert JSX code to HTML, so it can read properly

```
// babel.config.js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
```

- Install @testing-library/jest-dom

`npm install -D @testing-library/jest-dom`

### React Testing Library

- React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.

- React Testing Library uses Jest behind the scence.

- Jest is a delightful JavaScript Testing Framework with a focus on simplicity.It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

- Install React Testing Library

`npm install -D @testing-library/react`

- Install Jest

`npm install -D jest`

- When you use Babel, you should these dependencies also

`npm install --save-dev babel-jest @babel/core @babel/preset-env`

- Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:

```
// babel.config.js
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
```
- Configure Parcel Config file(.parcelrc) to disable default babel transpilation

```
// .parcelrc
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```

- Run the test case: Command to run test cases

`npm run test`
- Jest Configuration: Initialize the Jest, it will create new Jest Configuration file(jest.config.js)

`npx jest --init`
- Install jsdom Library

`npm install --save-dev jest-environment-jsdom`

- Install @babel/preset-react to make JSX work in test cases

`npm install @babel/preset-react`

- Include @babel/preset-react inside my babel.config.js file - @babel/preset-react helping our testing library to convert JSX code to HTML, so it can read properly

```
// babel.config.js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
```

- Install @testing-library/jest-dom

`npm install -D @testing-library/jest-dom`

- Create test file inside __test__ flder

- These file are considered as test file - **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x)

- __ is known as Dunder Tests.

```
fileName.test.js
fileName.test.ts
fileName.spec.js
fileName.spec.ts
```











