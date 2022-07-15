import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// component pages
import Home from '../pages/Home.vue'
import Detail from '../pages/Detail.vue'
import User from '../pages/User/Index.vue'
import Add from '../pages/User/Add.vue'
import Show from '../pages/User/Show.vue'
import Edit from '../pages/User/Edit.vue'

import EmojiIndex from '../pages/Emoji/Index.vue'

// routes
const routes= [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/users',
        name: 'User',
        component: User
    },
    {
        path: '/user/add',
        name: 'User.Add',
        component: Add
    },
    {
        props: true,
        path: '/user/:id',
        name: 'User.Show',
        component: Show,
    },
    {
        path: '/user/:id/edit',
        name: 'User.Edit',
        component: Edit,
    },
    {
        path: '/detail/:name',
        name: 'Detail',
        component: Detail
    },
    {
        path: '/emoji',
        name: 'Emoji',
        component: EmojiIndex
    }
]

const router= new VueRouter({
    mode: 'history',
    routes
})

export default router