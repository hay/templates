const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
            },
            {
                test : /\.vue$/,
                loader : 'vue-loader'
            }
        ]
    },
    plugins : [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'app')
    }
};