webpack.config.js
package.json 及配置选项
webpakc.publish.config.js

安装所需插件等
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server",
    "pub": "webpack --config webpack.publish.config.js"
  },
"devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "clean-webpack-plugin": "^0.1.17",
    "css-loader": "^0.28.7",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^1.1.5",
    "html-webpack-plugin": "^2.30.1",
    "jquery": "^3.2.1",
    "node-sass": "^4.6.1",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "sass-loader": "^6.0.6",
    "style-loader": "^0.19.0",
    "url-loader": "^0.6.2",
    "webpack": "^3.12.0",
    "webpack-dev-server": "^2.11.3"
  },
  "dependencies": {
    "mint-ui": "^2.2.13",
    "vue": "^2.5.21",
    "webpack-cli": "^3.1.2",
    "vue-loader": "^15.4.2",
  }

npm i vue -S 
npm i vue-loader vue-template-compiler -D