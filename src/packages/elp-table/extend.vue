<template>
    <el-table-column
      :prop="column.prop"
      :label="column.label"
      :width="column.width"
      :min-width="column.minWidth"
      :fixed="column.fixed"
      :sortable="column.sortable"
      :show-overflow-tooltip="column.tooltip"
      :align="column.align"
    >
      <template v-if="column.thTooltip" slot="header">
        <span class="th-tooltip">{{ column.label }}</span>
        <el-tooltip :content="column.thTooltip">
          <i class="el-icon-warning"></i>
        </el-tooltip>
      </template>
      <template slot-scope="scope">
        <component
          v-bind="decorationAttr(scope.row)"
          v-on="$listeners"
          :is="compName"
          :row="scope.row"
        />
      </template>
    </el-table-column>
</template>

<script>

import ElpTableOperate from './plugins/elp-table-operate'
import ElpTableSwitch from './plugins/elp-table-switch'

export default {
  components: {
    ElpTableOperate,
    ElpTableSwitch
  },
  props: {
    column: {
      type: Object,
      default () { return {} }
    }
  },
  computed: {
    compName () {
      const alias = ['operate', 'switch']
      const { type } = this.column.plugin || {}
      if (alias.includes(type)) return `elp-table-${type}`
    }
  },
  methods: {
    decorationAttr (row) {
      const _bind = {}
      const { attrs = {} } = this.column.plugin || {}
      for (let key in attrs) {
        let _attrVal = attrs[key]
        _bind[key] = typeof _attrVal === 'function' ? _attrVal(row) : _attrVal
      }
      return _bind
    }
  }
}
</script>

<style lang="less" scoped>

</style>