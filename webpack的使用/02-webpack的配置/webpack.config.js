const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {   
        //The provided value "./dist" is not an absolute path!
        //要动态获取
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    }

}

//在terminal运行webpack是使用的全局的webpack, 
//运行package.json里面的webpack是使用的本地的webpack