const path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                options: {
				    presets: ['@babel/preset-react', '@babel/preset-env'],
		        }
            },
        ],
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};