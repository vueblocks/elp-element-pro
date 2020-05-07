<template>
  <div class="contain">
    <elp-text-ellipse max-height="42px" cover-color="#A5ADB5" :more-visible="false">
      <span
        class="innertxt"
        v-for="idx in 30"
        :key="idx"
      >{{txt}}</span>
    </elp-text-ellipse>
  </div>
</template>

<script>
export default {
  name: 'docs-text-ellipse-more',
  data () {
    return {
      txt: '文字超出最大高度'
    }
  }
}
</script>

<style scoped>
.contain {
  background: #A5ADB5;
}
.innertxt {
  color: #34495E;
  line-height: 16px;
}
</style>