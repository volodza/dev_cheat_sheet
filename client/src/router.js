import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/MainPage'

import array from '@/components/sections/inbuiltObject/array'
import string from '@/components/sections/inbuiltObject/string'
import object from '@/components/sections/inbuiltObject/object'
import number from '@/components/sections/inbuiltObject/number'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/',
    routes: [{
        path: '/main',
        name: 'mainPage',
        component: MainPage,
        children: [{
                path: 'array',
                name: 'array',
                component: array
            },
            {
                path: 'string',
                name: 'string',
                component: string
            },
            {
                path: 'object',
                name: 'object',
                component: object
            },
            {
                path: 'number',
                name: 'number',
                component: number
            },
        ]
    }]
})