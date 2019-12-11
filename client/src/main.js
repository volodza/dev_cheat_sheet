import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@babel/polyfill'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false


import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
    './components/elements',
    false,
    /p[A-Z]\w+\.vue$/)
requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName)
    const componentName = upperFirst(
        camelCase(
            fileName
            .replace(/^\.\/_/, '')
            .replace(/\.\w+$/, '')
        )
    )
    Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')