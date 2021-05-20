const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = () => {
    const dist = path.resolve(__dirname, 'lib');

    return {
        mode: 'none',
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            path: dist,
            filename: 'index1.js',
        },

        devtool: 'none',
        resolve: {
            extensions: ['.ts', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'ts-loader',
                    include: path.resolve(__dirname, 'src'),
                    exclude: /node_modules/
                },
                { test: /\.js?/, loader: 'bable-loader', exclude: /node_modules/ }
            ],
        },
        plugins: [new CleanWebpackPlugin(), new BundleAnalyzerPlugin()],
    };
};
