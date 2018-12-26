import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import List from '../components/List'
import User from '../components/User'
import SlideBar from '../components/SlideBar'

Vue.use(Router)

export default new Router({
    routes: [{
        name: 'root',
        path: '/',
        components: {
            main: List,
            slidebar: SlideBar,
        },
        meta: {
            title: 'Vue仿CNode社区网站'
        }
    }, {
        name: 'post_content',
        path: '/topic/:id',
        components: {
            main: Article,
            slidebar: SlideBar
        }
    }, {
        name: 'user_info',
        path: '/user/:name',
        components: {
            main: User,
            slidebar: SlideBar
        }
    }]
})