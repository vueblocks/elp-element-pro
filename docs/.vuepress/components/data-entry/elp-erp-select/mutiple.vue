<template>
  <section>
    <el-row type="flex" align="middle">
      <el-col :span="3">多选</el-col>
      <el-col :span="21">
        <elp-erp-select
          v-model="erpValue"
          multiple
          @change="handelChange"
        />
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" style="margin-top:15px">
      <el-col :span="3">预先绑值</el-col>
      <el-col :span="21">
        <elp-erp-select
          v-model="erpVal"
          multiple
          label-in-value
          @change="onChange"
        />
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  name: 'docs-erp-select-mutiple',
  data () {
    return {
      erpValue: [],
      erpVal: ['liukai154', 'zhaozimu', 'yuchongwei']
    }
  },
  methods: {
    handelChange (val) {
      console.log('多值val', val)
    },
    onChange (item) {
      console.log('多值改变项', item)
    }
  }
}
</script>
