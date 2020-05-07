<template>
  <div class="elp-label-wrap-group" :style="calcStyle" :class="calcClass">
    <slot></slot>
    <elp-label-wrap
      v-for="(info,idx) in detailList"
      :key="idx"
      v-bind="info.attrs"
      :label="info.label"
    >
      <span >{{info.content}}</span>
      <span v-if="info.html" v-html="info.html"/>
    </elp-label-wrap>
  </div>
</template>

<script>
export default {
  name: 'elp-label-wrap-group',
  props: {
    eachColNum: {
      type: Number,
      default: 1
    },
    labelWidth: {
      type: String
    },
    labelPosition: {
      type: String
    },
    detailList: {
      type: Array,
      default () { return [] }
    }
  },
  computed: {
    calcStyle () {
      let _gridNum = this.eachColNum ? Math.round(100 / this.eachColNum) + '%' : 0
      return {
        '--basis': _gridNum || '100%',
        '--width': this.labelWidth || 'auto'
      }
    },
    calcClass () {
      return this.labelPosition ? `elp-label-wrap-group--${this.labelPosition}` : ''
    }
  }
}
</script>

<style lang="less" scoped>

</style>
