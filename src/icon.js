import ElpIcon from './packages/elp-icon'

const components = [
  ElpIcon
]

function install (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default install

// 引入icon
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./assets/icons', false, /\.svg$/)
requireAll(req)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}
