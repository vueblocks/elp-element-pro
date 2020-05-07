<template>
  <section>
    <div style="margin-bottom:10px">
      <span class="clearLabel">清空数据</span>
      <el-switch v-model="emptyData" />
      <span class="clearLabel">dotted</span>
      <el-switch v-model="dottedLine" />
      <span class="clearLabel">border</span>
      <el-switch v-model="border" />
      <span class="clearLabel">resizable</span>
      <el-switch v-model="resizable"/>
      <span class="clearLabel">size</span>
      <el-select v-model="sizeData" placeholder="选择尺寸" size="mini">
        <el-option value="medium" label="medium"></el-option>
        <el-option value="small" label="small"></el-option>
        <el-option value="mini" label="mini"></el-option>
      </el-select>
    </div>
    <elp-table
      :resizable="resizable"
      :border="border"
      v-model="currentPage"
      :dotted-line="dottedLine"
      empty-txt="自定义无数据文案"
      :page="page"
      :data="tableData"
      :size="sizeData"
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
  name: 'docs-table',
  data () {
    return {
      emptyData: false,
      dottedLine: false,
      border: false,
      resizable: true,
      sizeData: 'small',
      currentPage: 1,
      page: {
        show: true,
        layout: 'total, prev, pager, next, sizes',
        pageSize: 10,
        total: 20
      },
      userErp: 'liukai154',
      watchListCol: [
        {
          slot: 'userErp'
        }, {
          prop: 'name',
          label: '姓名'
        }, {
          prop: 'age',
          format({ age }) { return age + '岁'},
          label: '年龄'
        }
      ]
    }
  },
  computed: {
    tableData () {
      return this.emptyData ? [] : [
        { name: '张三', age: '18' },
        { name: '李四', age: '18' },
        { name: '王五', age: '18' }
      ]
    }
  }
}
</script>

<style scoped>
.clearLabel {
  font-size: 14px;
}
.el-select{
  width: 110px;
}
</style>
