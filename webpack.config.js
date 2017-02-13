var ET = require("extract-text-webpack-plugin");
module.exports = {
    entry: __dirname + "/src/scripts/app.js",
    devtool: "source-map",
    output: {
        path: __dirname + "/prd",
        filename: "./boudle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                loader: ET.extract({fallbackLoader: 'style-loader', loader: 'css-loader!sass-loader'})
            }
        ]
    },
    devServer: {
        contentBase: __dirname + "/prd/",
        historyApiFallback: true,
        inline: true,
        port: '8080',
        host: 'localhost'
    },
    plugins: [
        new ET("boudle.css")
    ]
}