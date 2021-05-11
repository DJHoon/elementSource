<template>
    <div>
        <my-button type="primary" @click="testMessage">测试</my-button>
    </div>
</template>

<script>
export default {
    methods: {
        testMessage() {
           this.$message({
                message: '我是标题',
                type: 'success',
                // duration: 0,
                showClose: true
            })
        }
    },
}
</script>

<style>

</style>