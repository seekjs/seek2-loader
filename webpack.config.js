/**
 * Created by likaituan on 02/03/2017.
 */


module.exports = {
	entry: "./main.js",
	output: {
		filename: "./bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "seekjs-loader",
				enforce: "pre",
				query: {
					ns:{
						sys: "/node_modules/seekjs/",
						root: "/",
						utils: "/utils/",
						js: {
							path:"/js/",
							type:".js"
						},
						tp:"/templates/",
						css: {
							path:"/css/",
							type:".css"
						}
					}
				}
			},
			{
				test: /\.css$/,
				loader: "css-loader"
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				loader: "url?limit=1023&name=images/[name].[ext]"
				query: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			}
		]
	},
	resolve: {
		alias: {
			ajax: "/utils/ajax",
			jquery: "/utils/jquery"
		}
	}
};

