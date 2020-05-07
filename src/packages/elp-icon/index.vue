<template>
  <svg
    :style="calcStyle"
    :class="'elp-icon-'+ name"
  >
    <use :xlink:href='`#elp-icon-${name}`'></use>
  </svg>
</template>

<script>
export default {
  name: 'elp-icon',
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#34495E'
    },
    size: {
      type: String,
      default: '16px'
    }
  },
  computed: {
    calcStyle () {
      return {
        fill: this.color,
        width: this.size,
        height: this.size
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
