<template>
  <section>
    <elp-table
      v-model="currentPage"
      :page="page"
      :data="tableData"
      :columns="watchListCol"
      ref="vTable"
    />
  </section>
</template>

<script>
export default {
  name: 'docs-table-tooltip',
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
          thTooltip: '用户的艺名'
        }, {
          prop: 'age',
          label: '年龄'
        }
      ],
      tableData: [
        { name: '张三', age: '18' },
        { name: '李四', age: '18' },
        { name: '王五', age: '18' }
      ]
    }
  }
}
</script>

<style scoped>

</style>