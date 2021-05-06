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

## Vue.extend、Vue.component与new Vue

vue构造、vue组件和vue实例这三个是不同的概念，它们的关系有点类似于Java的继承概念：

**关系**：`vue构造->vue组件->vue实例`

```js
<script>
    //vue构造
    Vue.extend({
        props: [],
        data: function() {
            return {}
        },
        template: ""
  
    });
    //vue组件
    Vue.component("mycomponent", {
        props: [],
        data: function() {
            return {}
        },
        template: ""
    });
    //vue实例
    new Vue({
        el: "",
        data: {}
    });
</script>
```

从上面的代码可以看出，vue构造和vue组件所需的部分初始化结构参数是一样的，这意味着vue实例可以直接跳过vue组件直接使用vue构造对自身组件初始化，也就是vue构造->vue实例，下面是三种API的区别：

### vue.extend

**特点**

- 只能通过自身初始化结构

**使用范围**

- 挂载在某元素下

- 被Vue实例的components引用

- Vue.component组件引用

```js
<div id="app2"></div>
<script>
    var apple = Vue.extend({
        template: "<p>我是构造函数创建：自身参数：{{a}}|外部传参：{{b}}</p>",
        data: function() {
            return {
                a: "a"
            }
        },
        props: ["b"]
    });
    //挂载构造函数
    new apple({
        propsData: {
            b: 'Vue.extend'
        }
    }).$mount('#app2');
</script>　　
```

运行结果：

```
我是构造函数创建：自身参数：a|外部传参：Vue.extend。
```

### Vue.component

**特点**

- 可通过自身初始化组件结构

- 可通过引入Vue.extend初始化组件结构

- 可通过第三方模板temple.html初始化组件结构

**使用范围**

- 任何已被vue初始化过的元素内

```vue
<div id="app3">
    <appleczuomponent v-bind:b="vparam"></applecomponent>
    <mycomponent v-bind:b="vparam"></mycomponent>
</div>
  
<script>
    //方法1 【引入构造】
    Vue.component('applecomponent', apple);
    //方法2 【自身创建】
    Vue.component("mycomponent", {
        props: ["b"],
        data: function() {
            return {
                a: "a"
            }
        },
        template: "<p>我是vue.component创建 自身参数：{{a}}|外部传参：{{b}}</p>"
    });
    var app3 = new Vue({
        el: "#app3",
        data: {
            vparam: "Vue.component"
        }
    });
</script>
```

运行结果：

```
我是构造函数创建：自身参数：a|外部传参：Vue.component
我是vue.component创建 自身参数：a|外部传参：Vue.component
```

###  new Vue

this.$options.key表示其自定义属性值,this.$??表示系统属性值,如this.$el

**特点**

1.可以通过自身components引用Vue.extend构造,通过自身data向构造传参

2.可以通过自身components引用组件模板，通过自身data向组件传参

**使用范围**

- 仅限于自身

```vue
<div id="app1">
    <dt1></dt1>
    <vueapple v-bind:b="msg"></vueapple>
</div>
  
<script type="text/x-template" id="dt1">
    <div>这里是子组件1</div>
</script>
  
<script>
    new Vue({
        el: "#app1",
        data: {
            msg: "vue实例参数"
        },
        components: {
            dt1: {
                template: "#dt1"
            },
            vueapple: apple //【引入构造】
        }
    });
 
</script>
```

运行结果：

```
这里是子组件1
我是构造函数创建：自身参数：a|外部传参：vue实例参数
```

### 综合案例

```js
/ Vue.component('component-name',{options}) 全局注册子组件
//将Vue.component()
let myExennd = Vue.extend({
    data(){
        return {
            name:'zeng'
        }
    },
    template:`<span> to {{name}} </span>`,
})
Vue.component('my-component',myExennd)
let vm = new Vue({
    el:'#vm'
})
```

**结论**：Vue.component()接收第二参数的时候，会判断是构造器还是{options}选项，如果是后者，就会隐式调用Vue.extend()返回构造器







