import Vue from 'vue'
import Message from './Message.vue'

var offsetTop = 20
const message = Vue.extend(Message)
Message.install = (options) => {
    options.onClose = () => {
        console.log(11111)
            // document.body.removeClild(msg.$el)
    }
    options.offsetTop = offsetTop
    offsetTop += 20
    const msg = new message({
        data: options
    })
    msg.$mount()
    document.body.append(msg.$el)
}

export default Message