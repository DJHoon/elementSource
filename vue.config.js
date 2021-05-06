const path = require('path')
module.exports = {
    css: {
        loaderOptions: {
        }
    },
    pluginOptions: {
        'style-resources-loader': {
          preProcessor: 'less',
          patterns: [path.resolve(__dirname, "src/css/variable.less")] // 引入全局样式变量
        }
    }
}