# Getting Started with React-TS-Redux-App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# What is it
This is a template for Typescript powered, redux equiped, React application template supported by eslint and other basic rules

## What's new
we have added following tools/libraries to this project\

```
   npx create-react-app React-TS-Redux-App --template typescript
   npm install redux
   npm install redux-thunk
   npm install @reduxjs/toolkit react-redux
   npm install -g sass
   npm install --save-dev eslint@7.32.0
   npm install --save-dev eslint-plugin-prettier
   npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```
Therefore, this application is basically equipped with `React`, `TypeScript`, `Redux and Redux-Thunk`, `Redux-ToolKit`, `SASS`, `ESLint and Prettier plugin`

### Wiring: 
Application is wired with `Redux` and Equipped with a reducer to use localized strings in the application
Most of the unnecessary Images, Comments, CSS files and Elements have been romoved that are originally available with create-react-app

`Components` folder is already set up where you can start adding components of your project

Language resource `en.json` is available In the `Language` folder, where you can add new localized language preferences there.
For example, `"my_language_key": English {0}` is a valid entry for en.json and you can access this value by calling `useMessageBundle` function in the `Language/selector.ts`

Example: `<div>{useMessageBundle("my_language_key", [(US)])}</div>` would result in `English (US)` 
Example also provide in the code @ `App.tsx`

in `combiner.ts` file you can combine all your reducers to one reducer that is `rootReducer` and use this `rootReducer` to wire the application with `reduxMiddleware` @ `store.ts`

## Available Scripts

In the project directory, you can run:

### `npm install`
Install all uninstalled modules that are listed in package.json

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
