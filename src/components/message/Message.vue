<template>
  <transition name='fade'>
    <!-- 蒙版 -->
    <div class="message">
      xxxxxx
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
    setTimeout(() => {
      console.log(this)
      document.body.removeChild(this.$el)
    }, 1000)
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.message {
  position: absolute;
  // top: 20%;
  right: 50%;
}
</style>
