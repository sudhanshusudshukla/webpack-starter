const webpack = require("webpack");
const dotenv = require("dotenv-webpack");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new dotenv({
      path: "./.env", // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false, // load '.env.defaults' as the default values if empty.
      //prefix: "import.meta.env.", // reference your env variables as 'import.meta.env.ENV_VAR'.
    }),
    new webpack.DefinePlugin({}),
    // new webpack.ProvidePlugin({
    //   process: "process/browser",
    // }),
  ],
};
