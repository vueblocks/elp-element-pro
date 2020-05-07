import CodeCard from './code-card'

const components = [
  CodeCard
]

function install (Vue, _) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default install
