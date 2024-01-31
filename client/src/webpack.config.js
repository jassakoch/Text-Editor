const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      //Webpack for bundles
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "JATE",
      }),
      //Injectmanifest for service worker for custom caching
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "src-sw.js",
      }),
      //Manifest for downloadable icon and metadata about the app, in json file
      
      //IDB database
      
    ],

    module: {
      rules: [
        //CSS 
        //Babel translator
        
      ],
    },
  };
};
