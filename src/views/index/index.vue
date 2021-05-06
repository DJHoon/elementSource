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
                title: '我是标题',
                content: '我是内容'
            })
        }
    },
}
</script>

<style>

</style>