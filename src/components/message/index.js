import Vue from 'vue'
import Message from './Message.vue'

const message = Vue.extend(Message)

Message.install = () => {
    const msg = new message().$mount()
    console.log(msg)
    document.body.append(msg.$el)
}

export default Message