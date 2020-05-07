<template>
  <section>
    <el-row type="flex" align="middle">
      <el-col :span="3">单选</el-col>
      <el-col :span="21">
        <elp-erp-select
          v-model="erpValue"
          placeholder="请输入erp"
          @change="handelChange"
        />
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" style="margin-top:15px">
      <el-col :span="3">预先绑值</el-col>
      <el-col :span="21">
        <elp-erp-select
          label-in-value
          v-model="erpVal"
          placeholder="请输入erp"
          @change="onChange"
        />
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  name: 'docs-erp-select',
  data () {
    return {
      erpValue: '',
      erpVal: 'liukai154'
    }
  },
  methods: {
    handelChange (val) {
      console.log('单值val', val)
    },
    onChange (item) {
      console.log('改变项', item)
    }
  }
}
</script>
