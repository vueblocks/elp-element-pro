<template>
  <elp-table
    v-model="currentPage"
    inline-edit
    :page="page"
    :data="tableData"
    :columns="columns"
    class="elp-table--edit"
    ref="vTable"
  />
</template>

<script>
export default {
  name: 'docs-table-icon',
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
              list: [
                {
                  icon: 'el-icon-video-pause',
                  event (row) {
                    console.log(row)
                  }
                },
                {
                  icon: 'el-icon-delete',
                  eventName: 'onDelLabel'
                },
                {
                  icon: 'el-icon-upload2',
                  eventName: 'onCheckLabel'
                },
                {
                  icon: 'el-icon-goods'
                }
              ]
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
  }
}
</script>

<style scoped>
.elp-table--edit .el-button--text {
  padding: 0;
}
</style>