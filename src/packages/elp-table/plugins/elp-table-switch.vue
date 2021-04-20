<template>
  <el-switch v-model="computedVal"></el-switch>
</template>

<script>
export default {
  name: 'elp-table-switch',
  props: {
    enable: {
      type: Boolean,
      default: false
    },
    row: {
      type: Object,
      default () { return {} }
    }
  },
  computed: {
    computedVal: {
      get () {
        return this.enable
      },
      set (val) {
        this.$emit('switchChange', { row: this.row, value: val })
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>