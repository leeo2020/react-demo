// 前端项目都运行在node.js环境中,这个配置文件是项目运行或打包时执行
const path = require('path')
// 引入webpack核心库
// const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const ESlintWebpackPlugin = require('eslint-webpack-plugin')

const config = {
	// 入口，字符串写法
	// entry: path.resolve(__dirname, './src/main.js'),
	// 对象写法
	entry: {
		// app: path.resolve(__dirname, './src/main.js')
		app: './src/main.js' // 入口相对路径也可以
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, './dist'),
		publicPath: ''
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			title: '2009'
		}),
		new CleanWebpackPlugin(),//,
		// 实现HMR(hot Module Replace)功能
		// new webpack.NamedModulesPlugin(),
		// new webpack.HotModuleRaplacementPlugin(),
		new ESlintWebpackPlugin()
	],
	module: {
		// Webpack要根据你定义的规则，来编译各种不同后缀的模块
		rules: [
			{test: /\.css$/, use: ['style-loader', 'css-loader']},
			// node-sass是sass编译器，它的作用是把sass-loader加载进来的scss文件编译成css文件。
			{test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
			// {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
			{test: /\.less$/, use: [{loader:'style-loader'}, {loader:'css-loader'}, {loader:'less-loader',options:{
				lessOptions:{
					javascriptEnabled: true
				}
					}}]},
			{test: /\.(jpg|png|jpeg|icon|ico|fig)$/, use: ['file-loader']},
			{test: /\.(js|jsx)$/, use: ['babel-loader'], exclude: /^node_modules$/},
			{test: /\.js$/, use: ['eslint-loader'], exclude: /^node_modules$/, enforce: 'pre'}
		]
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		},
		extensions: ['.js', '.jsx', '.ts']
	},
}

// module.exports = {
//   // 入口，字符串写法
//   // entry: path.resolve(__dirname, './src/main.js'),
//   // 对象写法
//   entry: {
//    	// app: path.resolve(__dirname, './src/main.js')
//    	app: './src/main.js' // 入口相对路径也可以
//   },
//   // 出口，只能对象写法，绝对路径
//   output: {
//   	filename: '[name].[chunkhash].js',
//   	path: path.resolve(__dirname, './dist'),
//     publicPath: ''
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//   	template: path.resolve(__dirname, 'public/index.html'),
//   	title: '2009'
//     }),
//     new CleanWebpackPlugin(),//,
//     // 实现HMR(hot Module Replace)功能
//     // new webpack.NamedModulesPlugin(),
//     // new webpack.HotModuleRaplacementPlugin(),
// 		new ESlintWebpackPlugin()
//   ],
// 	module: {
// 		// Webpack要根据你定义的规则，来编译各种不同后缀的模块
// 		rules: [
// 			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
// 			// node-sass是sass编译器，它的作用是把sass-loader加载进来的scss文件编译成css文件。
// 			{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
// 			{test:/\.(jpg|png|jpeg|icon|ico|fig)$/,use:['file-loader']},
// 			{test:/\.(js|jsx)$/,use:['babel-loader'],exclude:/^node_modules$/},
// 			// {test:/\.js$/,use:['eslint-loader'],exclude:/^node_modules$/,enforce:'pre'}
// 		]
// 	},
// 	resolve:{
//   	alias:{
//   		'@':path.resolve(__dirname,'src')
// 		},
// 		extensions:['.js','jsx']
// 	},
//   devServer: {
//     port: 9999,
//     open: true, // 打开默认浏览器
//     hot: true, // 本地热更新
//     contentBase: path.resolve(__dirname, './public')
//   },
// 	devtool:'source-map',
// }

if (process.env.NODE_ENV === "development") {
	config.devServer = {
		port: 9999,
		open: true, // 打开默认浏览器
		hot: true, // 本地热更新
		overlay: {
			errors: true
		}, //错误遮挡层
		contentBase: path.resolve(__dirname, './public'),
		proxy:{
			'/soso':{
				target:'https://c.y.qq.com',
				changeOrigin:true,
				ws:true
			}
		}

	},
		config.devtool = 'source-map'
}

module.exports = config
