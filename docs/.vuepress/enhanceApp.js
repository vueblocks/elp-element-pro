import ElementUiPro  from '../../src'
import ElementUiProIcon from '../../src/icon.js'
import ElementUI from "element-ui"

import "element-ui/lib/theme-chalk/index.css"
import '@vuepress/theme-default'
import "../../src/styles/index.less"
import './components/index.js'

export default ({ Vue }) => {
  Vue.use(ElementUiPro, {
    elpErpSelect: {
      requestParams: {
        url: '/symbol/common/query/allUser',
        params: 'account',
        label: 'label',
        value: 'value'
      }
    }
  })
  Vue.use(ElementUI)
  Vue.use(ElementUiProIcon)
}