module.exports = (env, argv) => {
    const mode = argv.mode;

    return {
        entry: [
            'babel-polyfill',
            './app/js/app.js'
        ],
        output: {
            path: __dirname + '/app',
            publicPath: '/',
            filename: 'bundle.js'
        },
        devtool : mode === 'development' ? 'inline-source-map' : false,
        resolve: {
            alias: {
                vue: 'vue/dist/vue.js'
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                }
            ]
        }
    }
}