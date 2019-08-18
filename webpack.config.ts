import path from 'path';
import webpack from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// @ts-ignore
import NodemonPlugin from 'nodemon-webpack-plugin';

const relFolder = 'stats';

const config: webpack.Configuration = {
    context: process.cwd(), // to automatically find tsconfig.json
    mode: "development",
    watch: true,
    target: "node",
    watchOptions: {
        poll: 500,
        ignored: /node_modules/,
    },
    node : {
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
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new NodemonPlugin({
            verbose: false,
            ignore: ["node_modules/**/node_modules"],
            watch: [path.resolve(__dirname, `${relFolder}/build/*.js`)],
        })
    ]
};

export default config;
