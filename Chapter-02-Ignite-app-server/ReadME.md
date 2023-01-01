This is the git code for the second class of Namaste React. This contains changes for removing CDN links and adding react and react-dom via npm packages. Before that we ran npm init to initiate the npm configurations in our project. This gives us a package.json file after which we can install whatever dependencies we need.

We add Parcel for bundling and minifying our app to make it deployment ready for production. We add this as a dev dependency as we want this only in the dev environment and not in the global environment.

We add React and React Dom as global dependency because this will be required even in the production environment.

We also add browsersList entry to our package.json to specify the browsers we'll be supporting in our app.

We also install babel-plugin-transform-remove-console plugin to help remove console logs while building the app. We then have to configure the plugin inside .bablerc file as per the documentation on npmjs