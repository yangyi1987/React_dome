var path =require('path');

module.exports = {
    mode: 'production',
    //入口文件
    entry:{
        index: './src/components/App.js',
        // another: './src/another-module.js'
    },
    //出口文件
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/dist/'
    },
    devServer:{
        host:'localhost',
        compress:true,
        port:5000
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
    },
    Plugins:[]
}
