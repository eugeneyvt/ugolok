module.exports = {
  devServer: {
    contentBase: "./app",
    compress: true,
    proxy: {
      "/graphql": {
        target: process.env.API_URL,
        secure: false,
      },
    },
  },
};
