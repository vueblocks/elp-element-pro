<template>
  <section>
    <elp-table
      resizable
      dotted-line
      :data="tableData"
      :columns="watchListCol"
      ref="vTable"
    >
      <el-table-column
        slot="userErp"
        label="ERP账号"
      >
        {{this.userErp}}
      </el-table-column>
    </elp-table>
  </section>
</template>

<script>
  export default {
    name: 'docs-table-query',
    data () {
      return {
        tableData: [
          { name: '张三', age: '18' },
          { name: '李四', age: '18' },
          { name: '王五', age: '19' }
        ],
        userErp: 'liukai154',
        watchListCol: [
          {
            slot: 'userErp'
          }, {
            prop: 'name',
            label: '姓名',
            columnKey: 'name',
            filterMultiple: false,
            filterPlacement: 'bottom',
            filterList: [
              { text: '张三', value: '张三' },
              { text: '李四', value: '李四' },
              { text: '王五', value: '王五' }
            ],
            filterMethods (value, row) {
              return row.name === value
            }
          }, {
            prop: 'age',
            format({ age }) { return age + '岁'},
            label: '年龄',
            columnKey: 'age',
            filterMultiple: true,
            filterPlacement: 'bottom',
            filterList: [
              { text: '18', value: '18' },
              { text: '19', value: '19' },
              { text: '20', value: '20' }
            ],
            filterMethods (value, row) {
              return row.age === value
            }
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
