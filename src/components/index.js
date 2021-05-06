import Button from './button/Button'
import Message from './message/index'

export default {
    install(Vue) {
        Vue.component('my-button', Button)
        // Vue.component('my-message', Message)
        Vue.prototype.$message = Message.install
    }
}