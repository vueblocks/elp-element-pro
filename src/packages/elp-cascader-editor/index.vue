<template>
  <el-row class="elp-cascader-editor">
    <transition-group name="elp-cascader-trans" tag="div">
      <el-col
        v-for="(items, idx) in chooseCateData"
        class="elp-cascader-editor__item"
        :span="24 / cascaderLevel"
        :key="idx">
        <h4 v-if="Array.isArray(levelLabel)" class="editor-header">{{ levelLabel[idx] }}</h4>
        <main class="editor-main">
          <!-- 搜索框 -->
          <el-input
            placeholder="搜索目录"
            size="small"
            v-show="showSearch === 'all' || showSearch.includes(idx)"
            v-model="searchVal[idx]"
          />
          <ul :style="{height: listHeight}" class="editor-main__list" ref="refLevel">
            <li
              class="editor-main__list__item"
              v-for="item in CascadeItems[idx]"
              :key="item.value"
              :class="{'editor-main__list__item--active': calcActive(item)}"
              @click="handleSelect(idx,item)">
              <!-- 编辑输入框 -->
              <el-input
                v-if="item.value === editNameVal.value"
                class="edit-input"
                size="mini"
                v-model.trim="editNameVal.newName"
                :placeholder="item.label"
                @blur="handleEditBlur(idx, item, editNameVal)"
                @keyup.enter.native="handleEditName(idx, item, editNameVal)"
                ref="refEditInput" />
              <span class='item-label' v-else >{{item.label}}</span>
              <!-- 自定义图标 -->
              <slot name="custom" v-bind:scope="{ item, level: idx }"></slot>
              <!-- 编辑 -->
              <i
                v-show="calcEditVisible(item, idx)"
                class="el-icon-edit icon-sty"
                @click="handleShowEditInput(item, idx)"/>
              <!-- 删除 -->
              <i
                v-show="calcDeleVisible(item,idx)"
                class="el-icon-circle-close icon-sty pull-right"
                @click.stop="handleDelete(idx, item)"/>
              <i
                v-if="idx !== levelThreshold"
                class="icon-sty pull-right"
                :class="{'el-icon-arrow-right': calcActive(item)}"/>
            </li>
            <!-- 添加新内容 -->
            <li>
              <el-input
                v-if="addNameVal.level === idx"
                size="mini"
                class="add-input"
                v-model.trim="addNameVal.name"
                :placeholder="placeholder"
                @blur="handleAddBlur"
                @keyup.enter.native="handleAddName(idx)"
                ref="refAddInput"
              />
            </li>
          </ul>
        </main>
        <el-button
          v-show="showAdd === 'all' || showAdd.includes(idx)"
          class="btn-add"
          size="small"
          icon="el-icon-plus"
          :disabled="addNameVal.level !== -1"
          @click="handleShowAddInput(idx)"
        />
      </el-col>
    </transition-group>
  </el-row>
</template>

<script>
export default {
  name: 'elp-cascader-editor',
  props: {
    value: {
      type: Array,
      required: true
    },
    cascaderLevel: {
      type: Number,
      default: 3,
      validator: function (value) {
        return value > 0
      }
    },
    levelLabel: {
      type: Array,
      default () { return ['目录1', '目录2', '目录3'] }
    },
    cascadeData: {
      type: Array,
      default () { return [] },
      required: true
    },
    listHeight: {
      type: String,
      default: '400px'
    },
    showSearch: { // 展示搜索框
      type: [String, Array],
      default: 'none'
    },
    showEdit: { // 展示编辑
      type: [String, Array],
      default: 'none'
    },
    showDelete: {
      type: [String, Array],
      default: 'none'
    },
    showAdd: {
      type: [String, Array],
      default: 'none'
    },
    placeholder: {
      type: String,
      default: '请输入目录名'
    }
  },
  data () {
    return {
      chooseCateData: [],
      searchVal: [],
      editNameVal: {
        value: '',
        newName: ''
      },
      addNameVal: {
        level: -1,
        name: ''
      }
    }
  },
  computed: {
    levelThreshold () {
      return this.cascaderLevel - 1
    },
    CascadeItems () {
      let _CascadeItems = new Array(this.cascaderLevel).fill(undefined).map(_ => ([]))
      this.chooseCateData.forEach((item, idx) => {
        item.forEach((inner) => {
          if (inner.label && inner.label.search(this.searchVal[idx]) !== -1) _CascadeItems[idx].push(inner)
        })
      })
      return _CascadeItems
    }
  },
  watch: {
    cascaderLevel () {
      this.init()
    },
    cascadeData: {
      handler (newVal) {
        this.resetData(newVal)
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    calcEditVisible (item, idx) {
      if (typeof item.editable === 'boolean') return item.editable
      return this.showEdit === 'all' || this.showEdit.includes(idx)
    },
    calcDeleVisible (item, idx) {
      if (typeof item.deleteable === 'boolean') return item.deleteable
      return this.showDelete === 'all' || this.showDelete.includes(idx)
    },
    resetData (newVal) {
      let _resultArr = []
      let _selectVal = []
      let _parent = [...newVal]
      _resultArr.push(_parent)
      for (let key in this.value) {
        let _cur = _parent.find(item => item.value === this.value[key])
        if (_cur) {
          _selectVal.push(this.value[key])
          _parent = _cur.children || []
          _resultArr.push(_parent)
        } else {
          break
        }
      }
      this.$emit('input', _selectVal)
      this.chooseCateData = [..._resultArr]
    },
    init () {
      this.chooseCateData = []
      this.searchVal = []
      this.$emit('input', [])
      if (this.cascadeData.length > 0) this.chooseCateData.push([...this.cascadeData])
    },
    handleSelect (idx, item) {
      if (idx === this.levelThreshold) return
      let _temVal = [...this.value]
      _temVal.splice(idx, this.cascaderLevel - idx, item.value)
      this.$emit('change', _temVal)
      this.$emit('input', _temVal)
      this.chooseCateData.splice(idx + 1, this.cascaderLevel - idx, [...item.children])
    },
    calcActive ({ value }) {
      return this.value.includes(value)
    },
    handleShowEditInput (item, index) {
      this.editNameVal = {
        value: item.value,
        newName: item.label
      }
      this.$nextTick(() => {
        this.$refs.refEditInput[0].focus()
      })
    },
    handleEditBlur (idx, item, newName) {
      let _result = { oldName: item.label, ...newName }
      this.$emit('edit-blur', { level: idx, editNode: _result })
      this.editNameVal.value = ''
    },
    handleEditName (idx, item, newName) {
      let _result = { oldName: item.label, ...newName }
      this.$emit('edit-enter', { level: idx, editNode: _result })
      this.editNameVal.value = ''
    },
    handleDelete (idx, item) {
      this.$emit('edit-delete', { level: idx, editNode: item })
    },
    handleAddName (idx) {
      this.$emit('edit-add', { level: idx, label: this.addNameVal.name })
      this.addNameVal = { level: -1, name: '' }
    },
    handleAddBlur () {
      this.addNameVal = { level: -1, name: '' }
    },
    handleShowAddInput (index) {
      this.addNameVal.level = index
      this.$nextTick(() => {
        this.$refs.refLevel[index].scrollTop = this.$refs.refLevel[index].scrollHeight
        this.$refs.refAddInput[0].focus()
      })
    }
  }
}
</script>
