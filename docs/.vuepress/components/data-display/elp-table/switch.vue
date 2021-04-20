<template>
  <section>
    <elp-table
      v-model="currentPage"
      :page="page"
      :data="tableData"
      :columns="watchListCol"
      @switchChange="onSwitchChange"
      ref="vTable"
    />
  </section>
</template>

<script>
export default {
  name: 'docs-table-switch',
  data () {
    return {
      currentPage: 1,
      page: {
        show: false
      },
      watchListCol: [
        {
          prop: 'name',
          label: '注册用户',
        }, {
          prop: 'age',
          label: '年龄'
        }, {
          prop: '',
          label: '操作',
          thTooltip: '启用/禁用组件',
          plugin: {
            type: 'switch',
            attrs: {
              enable ( { status }) {
                return !!status
              }
            }
          }
        }
      ],
      tableData: [
        { name: '张三', age: '18', status: 1 },
        { name: '李四', age: '18', status: 0 },
        { name: '王五', age: '18', status: 1 }
      ]
    }
  },
  methods: {
    onSwitchChange ({ row, value }) {
      const _msg = value ? '是否启用组件' : '是否禁用组件'
      this.$confirm(_msg, '提醒').then(res => row.status = value ? 1 : 0).catch(_ => {})
    }
  }
}
</script>

<style scoped>

</style>