<template>
  <el-card class="box-card">
    <div slot="header" class="box-card__head">
      <span>{{title}}</span>
    </div>
    <div class="box-card__main">
      <slot></slot>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'code-card',
  props: {
    title: String
  }
}
</script>

<style lang="less" scoped>
.box-card {
  &__head {
    display: flex;
    justify-content: space-between;
    color: #34495E;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
