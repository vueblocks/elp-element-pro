<template>
  <section>
    <elp-table
      v-model="currentPage"
      :page="page"
      :data="tableData"
      :columns="watchListCol"
      highlight-current-row
      @current-change="handleCurrentChange"
      ref="vTable"
    >
      <el-table-column type="index" width="50" slot="index"/>
    </elp-table>
    <div style="margin-top: 20px">
      <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
      <el-button @click="setCurrent()">取消选择</el-button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'docs-table-expand',
  data () {
    return {
      currentPage: 1,
      page: {
        show: false
      },
      watchListCol: [
        {
          slot: 'index'
        },
        {
          prop: 'name',
          label: '姓名A',
        }, {
          prop: 'age',
          label: '年龄'
        }
      ],
      tableData: [
        { name: '张三', age: '18' },
        { name: '李四', age: '18' },
        { name: '王五', age: '18' }
      ],
      currentRow: null
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.currentRow = val
    },
    setCurrent(row) {
      this.$refs.vTable.$refs.elpTable.setCurrentRow(row);
    }
  }
}
</script>

<style scoped>

</style>