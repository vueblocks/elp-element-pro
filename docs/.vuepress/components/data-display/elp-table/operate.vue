<template>
  <elp-table
    v-model="currentPage"
    inline-edit
    :page="page"
    :data="tableData"
    :columns="columns"
    class="elp-table--edit"
    ref="vTable"
    @operateClick="handleEvent"
  />
</template>

<script>
export default {
  name: 'docs-table-operate',
  data () {
    return {
      currentPage: 1,
      page: {
        show: false
      },
      columns: [
        {
          prop: 'name',
          label: '姓名A',
          edit: true
        }, {
          prop: 'age',
          label: '年龄'
        }, {
          prop: '',
          label: '操作',
          align: 'center',
          plugin: {
            type: 'operate',
            attrs: {
              list (row) {
                return [
                  {
                    label: '查看',
                    hide () {
                      return row.age === 13
                    },
                    eventName: 'onCheckLabel'
                  },
                  {
                    label: '删除',
                    eventName: 'onDelLabel'
                  },
                  {
                    label: '底表',
                    eventName: 'onCheckLabel'
                  },
                  {
                    label: '明细'
                  }
                ]
              }
            }
          }
        }
      ],
      tableData: [
        { name: '张三', age: 14 },
        { name: '李四', age: 13 },
        { name: '王五', age: 15 }
      ]
    }
  },
  methods: {
    handleEvent ({ eventName, row }) {
      console.log(eventName, row)
    }
  }
}
</script>

<style scoped>
.elp-table--edit .el-button--text {
  padding: 0;
}
</style>