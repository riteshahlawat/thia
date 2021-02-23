const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
	{
		mode: 'development',
		entry: './src/main/electron.ts',
		target: 'electron-main',
		module: {
			rules: [
				{
					test: /\.ts$/,
					include: /src/,
					use: [{ loader: 'ts-loader' }],
				},
			],
		},
		devtool: 'eval',
		output: {
			path: __dirname + '/dist',
			filename: 'electron.js',
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
	},
	{
		mode: 'development',
		entry: './src/renderer/react.tsx',
		target: 'electron-renderer',
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.ts(x?)$/,
					include: /src/,
					use: [{ loader: 'ts-loader' }],
				},
			],
		},
		devtool: 'eval',
		output: {
			path: __dirname + '/dist',
			filename: 'react.js',
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './src/renderer/index.html',
			}),
		],
	},
];
