module.exports = {
//module: {
  //  rules: [
    //  {
      //  test: /\.(png|jpe?g|gif)$/i,
    //    use: [
      //    {
        //    loader: 'file-loader',
          //  options: {
            //  name: '[path][name].[ext]',
  //            context: 'src',  // this is the key part to make it work with relative paths
    //        },
      //    },
 //       ],
 //     },
 //   ],
 // },
  devServer: {
    contentBase: "./app",
    compress: true,
    proxy: {
      "/graphql": {
        target: "https://api.ugolok.shop/graphql",
        secure: false,
      },
    },
  },
};
