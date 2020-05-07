<template>
  <elp-card
    style="border:1px solid #E3E6E8"
  >
    <el-form label-width="70px" label-position="left" :model="formInline">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="活动区域">
            <el-input v-model="formInline.region" placeholder="活动区域" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div style="text-align:right">
      <el-button type="primary">查询</el-button>
    </div>
  </elp-card>
</template>

<script>
export default {
  name: 'docs-card-query',
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