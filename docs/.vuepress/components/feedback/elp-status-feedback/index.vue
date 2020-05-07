<template>
  <div>
    <elp-status-feedback
      ref="feedback"
    />
    <el-button type="primary" @click="onStatus('deploy')">部署</el-button>
    <el-button type="primary" @click="onStatus('error')">服务错误</el-button>
  </div>
</template>

<script>
export default {
  name: 'docs-status-feedback',
  methods: {
    onStatus (type) {
      this.$refs.feedback.showTip(type)
    }
  }
}
</script>

<style scoped>

</style>