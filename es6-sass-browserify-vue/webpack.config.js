const path = require('path');

module.exports = {
    entry: [
        './app/js/polyfills.js',
        './app/js/app.js'
    ],
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader'
                }
            }
        ]
    },
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'app')
    }
};