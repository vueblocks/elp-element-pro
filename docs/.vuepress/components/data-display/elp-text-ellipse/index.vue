<template>
  <div>
    <elp-text-ellipse max-height="42px">
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
  name: 'docs-text-ellipse',
  data () {
    return {
      txt: '文字超出最大高度'
    }
  }
}
</script>

<style scoped>
.innertxt {
  color: #34495E;
  line-height: 16px;
}
</style>