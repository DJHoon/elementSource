# element-source

## 使用less,全局定义变量

- 安装

```js
npm i less less-loader
npm i style-resources-loader vue-cli-plugin-style-resources-loader -D
```

- 配置

```js
// vue.config.js
const path = require('path')
module.exports = {
    pluginOptions: {
        'style-resources-loader': {
          preProcessor: 'less',
          patterns: [path.resolve(__dirname, "src/css/variable.less")] // 引入全局样式变量
        }
    }
}
```

- variable.less

```less
/*variable.less*/
@default-color: #409eff;
```

## 使用阿里线上图库

```css
@font-face {
    font-family: 'iconfont';  /* Project id 2530027 */
    src: url('//at.alicdn.com/t/font_2530027_c3bvw9l221p.woff2?t=1620300812019') format('woff2'),
         url('//at.alicdn.com/t/font_2530027_c3bvw9l221p.woff?t=1620300812019') format('woff'),
         url('//at.alicdn.com/t/font_2530027_c3bvw9l221p.ttf?t=1620300812019') format('truetype');
}
/* 需要初始化 iconfont*/
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
/* 使用*/
<span class="iconfont">&#xe6fe;</span>
```

