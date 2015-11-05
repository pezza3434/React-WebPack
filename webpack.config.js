var config = {
    entry: [__dirname + '/app/main.js'],
    output: {
        path: './build',
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};


module.exports = config;
