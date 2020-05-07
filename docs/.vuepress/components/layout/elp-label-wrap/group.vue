<template>
  <section class="docs-label-group">
    <el-radio-group v-model="labelPosition" size="mini" style="margin-bottom:15px">
      <el-radio-button label="left">左对齐</el-radio-button>
      <el-radio-button label="right">右对齐</el-radio-button>
      <el-radio-button label="top">顶部对齐</el-radio-button>
    </el-radio-group>
    <elp-label-wrap-group :eachColNum="2" label-width="90px" :label-position="labelPosition">
      <elp-label-wrap label="名称：">基本展示</elp-label-wrap>
      <elp-label-wrap label="目的地：">基本展示</elp-label-wrap>
      <elp-label-wrap label="示例名称：">基本展示</elp-label-wrap>
      <elp-label-wrap label="示例名称：">基本展示</elp-label-wrap>
    </elp-label-wrap-group>
    <div class="title">每行三列</div>
    <elp-label-wrap-group :eachColNum="3">
      <elp-label-wrap label="示例名称：">基本展示</elp-label-wrap>
      <elp-label-wrap label="示例名称：">基本展示</elp-label-wrap>
      <elp-label-wrap label="示例名称：">基本展示</elp-label-wrap>
      <elp-label-wrap label="示例名称：">基本展示</elp-label-wrap>
    </elp-label-wrap-group>
  </section>
</template>

<script>
export default {
  name:'docs-label-wrap-group',
  data () {
    return {
      labelPosition: 'left'
    }
  }
}
</script>

<style lang="less" scoped>
.docs-label-group {
  .title {
    font-size: 16px;
    line-height: 34px;
  }
}
</style>