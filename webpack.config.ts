import path from 'path';
import webpack from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// @ts-ignore
import NodemonPlugin from 'nodemon-webpack-plugin';

const relFolder = 'web';

const config: webpack.Configuration = {
    context: process.cwd(), // to automatically find tsconfig.json
    mode: "development",
    watch: true,
    target: "web",
    watchOptions: {
        poll: 500,
        ignored: /node_modules/,
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    entry: {main: `./${relFolder}/src/index.ts`},
    output: {
        path: path.resolve(__dirname, `${relFolder}/build`),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        // disable type checker - we will use it in fork plugin
                        transpileOnly: true
                    }
                }],

            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        contentBase: path.resolve(__dirname, `${relFolder}/build`),
        watchContentBase: true,
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Web Framework',
            template: path.resolve(__dirname, `${relFolder}/src/assets/index.html`)
        }),
        // new NodemonPlugin({
        //     verbose: false,
        //     ignore: ["node_modules/**/node_modules"],
        //     delay: 1500,
        //     watch: [path.resolve(__dirname, `${relFolder}/build/*.js`)],
        // })
    ]
};

export default config;
