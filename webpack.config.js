module.exports = {
  entry: './app/app.ts', // where to start compiling
  devtool: 'inline-source-map',
  module: {
    rules : [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    inline: false // stops the broswer from auto refreshing when changing the code
  }
};
