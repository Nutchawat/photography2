const { mix } = require('laravel-mix');
// const ImageminPlugin = require('imagemin-webpack-plugin').default;
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const imageminMozjpeg = require('imagemin-mozjpeg');

// let config = {
//     plugins: [
//         new CopyWebpackPlugin([{
//             from: 'resources/assets/images',
//             to: 'img', // Laravel mix will place this in 'public/img'
//         }]),
//         new ImageminPlugin({
//             test: /\.(jpe?g|png|gif|svg)$/i,
//             plugins: [
//                 imageminMozjpeg({
//                     quality: 80,
//                 })
//             ]
//         })
//     ]
// }

// mix.webpackConfig(config);
mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/css/style.css', 'public/css')
   .sass('resources/assets/sass/app.scss', 'public/css');