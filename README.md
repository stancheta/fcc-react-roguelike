# FCC-DataVis-Boilerplate

This is a simple boilerplate for the challenges on [FreeCodeCamp's](https://www.freecodecamp.com/)
 Data Visualization Path. It was made by ejecting Facebook/React team's fantastic
 [Create React App](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html)
 and adding some extra lines on the Webpack config file to support SASS/SCSS.

 Here is a link to Create React App's original [README](https://github.com/facebookincubator/create-react-app/blob/master/README.md).  

I created this boilerplate in order to tackle freecodecamp's Data Visualization challenges, but it can now also be used for freecodecamp's Dynamic Web Application challenges with the addition of a basic express server.  If there's anything that you find to make this boilerplate better, feel free to make a pull request.

npm scripts:
`npm start` will start up a webpack server for developing a front end react app.

`npm run build` will build the project and place the files in a `public` folder.

`npm run serve` will serve whatever is in the `public` folder on `localhost:8080` with an express server.

`npm run prod` will build and then serve the project.

If you want to use the original datavis only boilerplate, then use the `datavis-only` branch.
