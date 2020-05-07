<template>
  <elp-card
    style="border:1px solid #E3E6E8"
    title="基本信息"
    tooltip="提示信息"
    subTitle="请确保填写信息准确无误"
  >
    <el-button  slot="operate" type="text" style="padding:0">操作按钮</el-button>
    <el-form :inline="true" :model="formInline">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </elp-card>
</template>

<script>
export default {
  name: 'docs-card',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>