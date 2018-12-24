import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/index'

Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.filter('formatDate', (str) => {
    if (!str) return ''
    let date = new Date(str)
    let time = new Date().getTime() - date.getTime()

    if (time < 0) {
        return ''
    } else if (time / 1000 < 30) {
        return '刚刚'
    } else if (time / 1000 < 60) {
        return `${parseInt(time/1000)}秒前`
    } else if (time / 60000 < 60) {
        return `${parseInt(time/60000)}分钟前`
    } else if (time / 3600000 < 24) {
        return `${parseInt(time/3600000)}小时前`
    } else if (time / 86400000 < 31) {
        return `${parseInt(time/86400000)}天前`
    } else if (time / 2592000000 < 12) {
        return `${parseInt(time/2592000000)}月前`
    } else {
        return `${parseInt(time/31536000000)}年前`
    }
})

Vue.filter('tabFormater', (value) => {
    if (value.good === true) {
        return '精华'
    } else if (value.top === true) {
        return '置顶'
    } else if (value.tab === 'ask') {
        return '问答'
    } else if (value.tab = 'share') {
        return '分享'
    } else {
        return '招聘'
    }
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')