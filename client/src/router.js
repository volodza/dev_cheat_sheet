import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/MainPage'

import objectList from '@/components/sections/inbuiltObject/objectList'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/',
    routes: [{
        path: '/main',
        name: 'mainPage',
        component: MainPage,
        children: [{
                path: 'objectList',
                name: 'objectList',
                component: objectList
            }

        ]
    }]
})