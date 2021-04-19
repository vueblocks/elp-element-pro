import ElpDongdong from './packages/elp-dongdong'
import ElpTextEllipse from './packages/elp-text-ellipse'
import ElpTagSelect from './packages/elp-tag-select'
import ElpPageBreadcrumb from './packages/elp-page-breadcrumb'
import ElpTable from './packages/elp-table'
import ElpErpSelect from './packages/elp-erp-select'
import ElpCascaderPanel from './packages/elp-cascader-panel'
import ElpCascaderEditor from './packages/elp-cascader-editor'
import ElpDatepickerGroup from './packages/elp-datepicker-group'
import ElpCard from './packages/elp-card'
import ElpLabelWrap from './packages/elp-label-wrap'
import ElpLabelWrapGroup from './packages/elp-label-wrap/group.vue'
import ElpTableOperate from './packages/elp-table/plugins/elp-table-operate.vue'

const components = [
  ElpDongdong,
  ElpTextEllipse,
  ElpTagSelect,
  ElpPageBreadcrumb,
  ElpTable,
  ElpErpSelect,
  ElpCascaderPanel,
  ElpCascaderEditor,
  ElpDatepickerGroup,
  ElpCard,
  ElpLabelWrap,
  ElpLabelWrapGroup,
  ElpTableOperate
]

function install (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$eleUiProGlobal = opts
}

export default install

export {
  ElpDongdong,
  ElpTextEllipse,
  ElpTagSelect,
  ElpPageBreadcrumb,
  ElpTable,
  ElpErpSelect,
  ElpCascaderPanel,
  ElpCascaderEditor,
  ElpDatepickerGroup
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}
