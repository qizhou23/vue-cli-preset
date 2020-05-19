import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from '@/assets/js/request'
import directives from '@/assets/js/directives'

Vue.config.productionTip = false
Vue.prototype.$http = request
Vue.use(directives)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
