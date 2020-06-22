var path =require('path');

module.exports = {
    mode: 'production',
    //入口文件
    entry:{
        index: './src/index.js',
        // another: './src/another-module.js'
    },
    //出口文件
    output:{
        // filename:'index.js',
        // path:path.resolve(__dirname,'dist')
        path:__dirname + '/dist', 
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer:{
        host:'localhost',
        compress:true,
        port:5000
    },
    performance: {
        hints: false, 
        // maxAssetSize: 300000, // 整数类型（以字节为单位）
        // maxEntrypointSize: 500000 // 整数类型（以字节为单位）
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loaders:"babel-loader",
                query:{
                    presets:['es2015','react','env',"stage-2"]
                }
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    }
}
