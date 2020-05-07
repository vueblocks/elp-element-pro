<template>
  <div
    class="elp-text-ellipse"
    :style="containStyle"
  >
    <slot></slot>
    <div class="wrap--more" @click="showMoreClick">
      <span class="symbol" v-if="isShowMore">...</span>
      <span
        class="txt"
        v-if="moreVisible"
        :style="{ color }"
      >
        {{isShowMore ? '更多' : '收起'}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'elp-text-ellipse',
  props: {
    maxHeight: {
      type: String
    },
    color: {
      type: String,
      default: '#00C4FF'
    },
    coverColor: {
      type: String,
      default: '#fff'
    },
    moreVisible: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isShowMore: true
    }
  },
  computed: {
    containStyle () {
      return this.isShowMore ? {
        'max-height': this.maxHeight,
        '--width': this.isShowMore ? '100%' : '0%',
        '--coverColor': this.coverColor
      } : {}
    }
  },
  methods: {
    showMoreClick () {
      if (!this.moreVisible) return
      this.isShowMore = !this.isShowMore
    }
  }
}
</script>
