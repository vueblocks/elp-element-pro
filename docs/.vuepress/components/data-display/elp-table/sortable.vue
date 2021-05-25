<template>
  <section>
    <elp-table
      v-model="currentPage"
      :page="page"
      :data="tableData"
      :columns="watchListCol"
      @sort-change="sortChange"
      ref="vTable"
    />
  </section>
</template>

<script>
export default {
  name: 'docs-table-sortable',
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
          label: '年龄',
          sortable: 'custom'
        }
      ],
      tableData: [
        { name: '张三', age: '18' },
        { name: '李四', age: '30' },
        { name: '王五', age: '7' }
      ]
    }
  },
  methods: {
    sortChange (property) {
      return this.tableData.sort(function (x, y) {
        if (property.order === 'ascending') {
          return x[property.prop] - y[property.prop]
        } else if (property.order === 'descending') {
          return y[property.prop] - x[property.prop]
        } else {
          return 0
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
