import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

module.exports = {
	entry: './src/index.ts',
	output: {
		filename: 'main.js',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	devtool:
		process.env.NODE_ENV === 'production' ? 'false' : 'inline-source-map',
	devServer: {
		contentBase: './dist',
		stats: 'error-only',
		compress: false,
		host: 'localhost',
		port: 6762,
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ['./dist'],
		}),
		new HtmlWebpackPlugin(),
	],
}
