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
      <template slot-scope="scope">
        <component
          v-bind="decorationAttr(scope.row)"
          :is="compName"
          @handleEvent="onHandleEvent(scope.row, $event)"
          @eventHandle="onEventHandle(scope.row, $event)"
        />
      </template>
    </el-table-column>
</template>

<script>
export default {
  props: {
    column: {
      type: Object,
      default () { return {} }
    }
  },
  computed: {
    compName () {
      const alias = ['operate']
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
    },
    onHandleEvent (row, eventName) {
      this.$emit('handleEvent', { row, eventName })
    },
    onEventHandle (row, event) {
      if (typeof event === 'function') event(row)
    }
  }
}
</script>

<style lang="less" scoped>

</style>