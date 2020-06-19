const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: ['./src/index.js'],
	output: {
			path: __dirname + '/build',
			publicPath: '/',
			filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html"
		})
	],
	devServer: {
		contentBase: path.join(__dirname, "./build"),
		watchContentBase: true,
		historyApiFallback: true,
		inline: true,
		open: false,
		hot: true,
		disableHostCheck: true,
		port: 8888,
	}
};
