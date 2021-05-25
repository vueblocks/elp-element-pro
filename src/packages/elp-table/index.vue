<template>
  <section
    class="elp-table"
    :class="{'elp-table--dotted':dottedLine , 'elp-table--resizable': resizable && !border }"
  >
    <el-table
      :border="border || resizable"
      :size="size"
      :data="formatData"
      v-bind="tableProps"
      :cell-class-name="cellClassName"
      :header-cell-class-name="'table-header-cell'"
      style="width: 100%"
      v-on="$listeners"
      ref="elpTable"
    >
      <template v-for="(column, index) in columns">
        <slot v-if="column.slot" :name="column.slot"></slot>
        <extend v-else-if="column.plugin" :column="column" :key="index"  v-on="$listeners" />
        <el-table-column
          v-else-if="!column.hidden"
          :key="index"
          :prop="column.prop"
          :label="column.label"
          :width="column.width"
          :min-width="column.minWidth"
          :fixed="column.fixed"
          :sortable="column.sortable"
          :show-overflow-tooltip="column.tooltip"
          :align="column.align"
        >
          <template v-if="column.thTooltip" slot="header">
            <span class="th-tooltip">{{ column.label }}</span>
            <el-tooltip :content="column.thTooltip">
              <i class="el-icon-question"></i>
            </el-tooltip>
          </template>
          <template slot-scope="scope">
            <template v-if="inlineEdit && column.edit && scope.row._edit ">
              <el-input class="edit-input" size="mini" v-model="scope.row[column.prop]"></el-input>
            </template>
            <template v-else>
              <span v-if="!column.format" v-html="scope.row[column.prop]"></span>
              <span v-else v-html="column.format(scope.row)"></span>
            </template>
          </template>
        </el-table-column>
      </template>
      <!-- 暂无数据样式 -->
      <section slot="empty" class="noDataShow">
        <section class="wrap">
          <img v-if="imgSrc" :src="imgSrc" class="imgPanel">
          <div class="tipTxt" v-html="emptyTxt"></div>
        </section>
      </section>
    </el-table>
    <el-pagination
      background
      v-if="page.show"
      :total="page.total"
      :layout="page.layout"
      :current-page="value"
      :page-size="page.pageSize"
      :page-sizes="page.pageSizes"
      :pager-count="page.pageCount || 7"
      @size-change="sizeChange"
      @current-change="currentChange"
      v-on="$listeners"
      class="elp-table-page"
      ref="elpPage"
    />
  </section>
</template>

<script>

import omit from 'lodash.omit'
import Extend from './extend'

export default {
  name: 'elp-table',
  components: {
    Extend
  },
  props: {
    data: {
      type: Array,
      default () { return [] }
    },
    resizable: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default () { return [] }
    },
    page: {
      type: Object,
      default () { return {} }
    },
    value: {
      type: Number,
      default: 1
    },
    inlineEdit: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'small'
    },
    emptyTxt: { type: String, default: '暂无数据' },
    dottedLine: { type: Boolean, default: false },
    cellClassName: {
      type: [Function, String],
      default: 'elp-table-cell'
    }
  },
  computed: {
    tableProps () {
      return omit(this.$attrs, ['data', 'columns', 'page', 'value', 'inlineEdit'])
    },
    formatData () {
      return this.inlineEdit ? this.recursiveTree(this.data) : this.data
    },
    imgSrc () {
      const globalParams = this.$eleUiProGlobal['elpTable'] || {}
      return globalParams.imgSrc || ''
    }
  },
  methods: {
    sizeChange (val) {
      this.$emit('size-change', val)
    },
    currentChange (val) {
      this.$emit('input', val)
    },
    recursiveTree (data) {
      const res = data.map(v => {
        if (v.children && v.children.length > 0) {
          this.recursiveTree(v.children)
        }
        this.$set(v, '_edit', false)
        return v
      })
      return res
    }
  }
}
</script>
