import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import List from '../components/List'
import User from '../components/User'
import Sidebar from '../components/Sidebar'

Vue.use(Router)

export default new Router({
    routes: [{
        name: 'root',
        path: '/',
        components: {
            main: List,
            slidebar: Sidebar
        }
    }, {
        name: 'post_content',
        path: '/topic/:id',
        components: {
            main: Article,
            slidebar: Sidebar
        }
    }, {
        name: 'user_info',
        path: '/user/:name',
        components: {
            main: User,
            slidebar: Sidebar
        }
    }]
})