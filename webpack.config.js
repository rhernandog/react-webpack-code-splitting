var webpack = require("webpack");
var path = require("path");
var htmlPlugin = require("html-webpack-plugin");
var CleanObsolete = require('webpack-clean-obsolete-chunks');

// HTML plugin config
var myHtmlPlugin = new htmlPlugin({
	template: "./src/template/index.html"
});

// commons chunk plugin
var chunkPlugin = new webpack.optimize.CommonsChunkPlugin({
	names: ["vendors", "manifest"]
});

// set environment plugin
var setEnvPlugin = new webpack.DefinePlugin({
	// node environment
	 'process.env': {
		NODE_ENV: JSON.stringify('production')
	} 
})

// remove obsolete chunks after a re-compile while watching the files
var removeObsolete = new CleanObsolete({verbose:true});

const VENDORS = [
	"react", "react-dom", "react-router-dom", "lodash"
];

module.exports = {
	entry: {
		app: "./src/app.js",
		vendors: VENDORS
	},
	output: {
		// set the output path. absolute path relative to the system/server
		// use node's path
		path: path.join( __dirname, "build" ),
		filename: "js/[name].[chunkhash].js",
		publicPath: ""
	},
	devtool: "source-map",
	// loaders
	module: {
		rules: [
			// babel
			{
				use: "babel-loader", 
				test: /\.js$/,
				exclude: /node_modules/
			},
			// images
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				// for images first optimize them with the image webpack loader
				// then set them in the img folder
				use: [
					{
						loader: "file-loader",
						options: { name: "img/[name].[ext]" }
					},
					"image-webpack-loader"
				]
			}
		] // rules
	}, // module
	// plugins
	plugins: [
		myHtmlPlugin,
		chunkPlugin,
		removeObsolete
	], // plugins
	watch: true,
	watchOptions: {
		ignored: /node_modules/
	},  
	// set dev server to work with routes reloading
	devServer: {
		historyApiFallback: true
	}, 
};
