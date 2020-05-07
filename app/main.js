import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins/element-ui.js'

import '@/assets/style/common.less'
import Components from '@/components'
import ElementUiPro from '@lib'

Vue.config.productionTip = false
Vue.use(ElementUiPro)
Vue.use(Components)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
