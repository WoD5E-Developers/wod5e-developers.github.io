import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const __dirname = path.resolve() // ESM doesn't have __dirname
const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

export default (env, argv) => {
  const IS_PRODUCTION = argv.mode === 'production'

  const config = {
    mode: argv.mode,
    entry: './src/index.js',
    output: {
      path: dist,
      filename: '[name]-[contenthash].js',
      publicPath: '/'
    },
    resolve: {
      alias: {
        '@': src
      }
    },
    devServer: {
      static: dist,
      allowedHosts: 'all',        // dev server accessible on network
      historyApiFallback: true,   // SPA fallback
      open: true,                 // auto-open browser
      hot: true,                  // enable HMR
      port: 8080
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new VueLoaderPlugin(),
      new CleanWebpackPlugin(),
      ...(IS_PRODUCTION
        ? [new MiniCssExtractPlugin({ filename: '[contenthash].css' })]
        : [])
    ],
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          exclude: /node_modules/,
          options: { compilerOptions: { whitespace: 'preserve' } }
        },
        {
          test: /\.css$/,
          use: [
            IS_PRODUCTION ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: { modules: { localIdentName: '[local]' } }
            }
          ]
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|gif|svg|ico|webp)$/,
          loader: 'file-loader',
          options: { name: '[name].[ext]' }
        }
      ]
    },
    optimization: {
      minimizer: [
        `...`, // keep Webpack defaults
        new CssMinimizerPlugin()
      ],
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'node_modules',
            chunks: 'all'
          }
        }
      }
    }
  }

  return config
}
