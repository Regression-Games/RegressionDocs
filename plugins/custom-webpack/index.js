module.exports = function (context, options) {
    return {
        name: 'custom-webpack-plugin',
        configureWebpack(config, isServer, utils) {
            return {
                resolve: {
                    alias: {
                        'react/jsx-runtime': 'react/jsx-runtime.js',
                    },
                },
            };
        },
    };
};