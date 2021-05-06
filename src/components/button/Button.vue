<template>
  <div>
      <button
        v-bind="$attrs"
        v-on="$listeners"
        class="button"
        :class="[
            type?type: '',
            loading?'is-loading': ''
        ]">
        <span class="iconfont rotate" v-if="loading">&#xe756;</span>
        <span v-if="$slots.default"><slot></slot></span>
      </button>
  </div>
</template>

<script>
export default {
    inheritAttrs: true,
    data() {
        return {}
    },
    props: {
        type: {
            type: String,
            default: () => 'default'
        },
        loading: {
            type: Boolean,
            default: () => false
        }
    },
    mounted() {
    }
}
</script>

<style lang="less">
.button {
    background-color: #fff;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    cursor: pointer;
    transition-property:border;
    transition-duration: .2s;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    position: relative;
}
.default {
    /* background-color:; */
    &:hover {
        color: @default-color;
        background: #ecf5ff;
        border-color: #b3d8ff;
    }
    &:focus, &:hover {
        color: @default-color;
        background: #ecf5ff;
    }
    &:active {
        border-color: @default-color;
    }
}
.primary {
    color: #fff;
    background-color:  @default-color;
    border-color: @default-color;
     &:focus, &:hover {
       background: #66b1ff;
       border-color: #66b1ff;
    }
    &:active {
       background: #3a8ee6;
       border-color: #3a8ee6;
       color: #fff;
    }
}

@keyframes rotate{
   0%{
      transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    100%{
      transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
    }
}

.rotate{
    display: inline-block;
    width:16px;
    height:16px;
    transition: 0.5s;
    transform-origin: center center;  
    animation: rotate 1s  linear  infinite;  /*开始动画后无限循环，用来控制rotate*/
}
.is-loading {
    cursor: default;
    content: "";
    pointer-events: none;
}
.is-loading::before {
    pointer-events: none;
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: inherit;
    background-color: hsla(0,0%,100%,.35);
}
</style>