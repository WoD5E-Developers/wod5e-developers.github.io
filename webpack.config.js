const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

module.exports = (env, argv) => {
  const IS_PRODUCTION = argv.mode === 'production'

  const config = {
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
    mode: argv.mode,
    devServer: {
      static: dist,
      // Enabled to be able to visit dev server from phones and other computers in the network
      allowedHosts: 'all',
      // Fallback to browser history API
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new VueLoaderPlugin(),
      new CleanWebpackPlugin()
    ],
    module: {
      rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            whitespace: 'preserve'
          }
        }
      }, {
        test: /\.css$/,
        use: [
          IS_PRODUCTION ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]',
              }
            }
          }
        ]
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|ico|webp)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }]
    },
    optimization: {
      minimizer: [
        // extend default plugins
        `...`,
        // HTML and JS are minified by default if config.mode === production.
        // But for CSS we need to add this:
        new CssMinimizerPlugin()
      ],
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'node_modules',
            chunks: 'all',
          }
        }
      }
    }
  }


  if (IS_PRODUCTION) {
    // Put all CSS files to a single <link rel='stylesheet' href='...'>
    config.plugins.push(new MiniCssExtractPlugin({
      filename: '[contenthash].css'
    }))
  }

  return config
}
