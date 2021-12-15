let HtmlWebpackPlugin = require('html-webpack-plugin');
let VueLoaderPlugin = require('vue-loader/lib/plugin');
let Webpack = require('webpack');
const path = require("path"); //Node.js内置模块
module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename: "bundle.js"
    },
    devtool:'eval-source-map',
    mode : 'development',
    // devServer:{
    //     contentBase: './src',
    //     port:8001,
    //     hot:true,
    //     open:true,
    //     inline:true,
    //     historyApiFallback:true,
    //     proxy:{
    //         'api':{
    //             target:'http://localhost:8000',
    //             changeOrigin:true,
    //             secure:false
    //         }
    //     }
    // },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['env']
                    }
                },
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/'\.(png|jpg|gif|woff|ttf)$'/,
                use:'url-loader'
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new VueLoaderPlugin(),
        new Webpack.HotModuleReplacementPlugin()
    ]
}
