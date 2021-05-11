<template>
  <transition name='fade'>
    <!-- 蒙版 -->
    <div class="message" :style="{top: offsetTop+'px'}">
      {{message}}
      <span class="iconfont" @click="close" v-if="showClose">&#xe747;</span>
    </div>
  </transition>
</template>

<script>
import '@/css/icon.css'
export default {
  data () {
    return {
      message: '',
      duration: 1000,
      showClose: false,
    }
  },
  created () {
    console.log(this)
    if(this.duration > 0) {
      setTimeout(() => {
        this.close()
      }, this.duration)
    }
  },
  computed: {
   
  },
  methods: {
    close() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
      this.onClose()
    }
  }
}
</script>

<style lang="less" scoped>
.message {
    min-width: 380px;
    box-sizing: border-box;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: #EBEEF5;
    // position: fixed;
    // left: 50%;
    // top: 20px;
    background-color: #edf2fc;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: flex;
    align-items: center;
    // transform: translate(20px, 100px);
    // transition: all 2s linear;
    animation: myAnimation 1s ;
}
@keyframes myAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
