<template>
  <elp-table
    v-model="currentPage"
    inline-edit
    :page="page"
    :data="tableData"
    :columns="watchListCol"
    class="elp-table--edit"
    ref="vTable"
  >
    <el-table-column width="100" label="操作" slot="operate">
      <template slot-scope="scope">
        <template v-if="scope.row._edit">
          <el-button
            type="text"
            @click="confirmEdit(scope.row)">
            保存
          </el-button>
          <el-button
            type="text"
            @click="cancelEdit(scope.row)">
            取消
          </el-button>
        </template>
        <el-button
          type="text"
          @click="handleEdit(scope.row)"
          v-else>
          编辑
        </el-button>
      </template>
    </el-table-column>
  </elp-table>
</template>

<script>
export default {
  name: 'docs-table-edit',
  data () {
    return {
      currentPage: 1,
      page: {
        show: false
      },
      watchListCol: [
        {
          prop: 'name',
          label: '姓名A',
          edit: true
        }, {
          prop: 'age',
          label: '年龄'
        }, {
          slot: 'operate'
        }
      ],
      tableData: [
        { name: '张三', age: '18' },
        { name: '李四', age: '18' },
        { name: '王五', age: '18' }
      ],
      rowTemp: {}
    }
  },
  methods: {
    confirmEdit (row) {
      this.$set(row, '_edit', false)
      this.rowTemp = {}
    },
    cancelEdit (row) {
      Object.assign(row, this.rowTemp)
      this.$set(row, '_edit', false)
      this.rowTemp = {}
    },
    handleEdit (row) {
      this.rowTemp = { ...row }
      this.$set(row, '_edit', true)
    }
  }
}
</script>

<style scoped>
.elp-table--edit .el-button--text {
  padding: 0;
}
</style>