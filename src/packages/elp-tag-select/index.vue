<template>
  <section class="elp-tag-select">
    <!-- 标签名 -->
    <slot name="title">
      <label
        v-if="label"
        class="elp-tag-select__title"
        :style="{width: `${labelWidth}px`}">
        {{label}}
      </label>
    </slot>
    <!-- 标签列表 -->
    <section class="elp-tag-select__list">
      <div class="list-items" :class="{ 'hidden-more': showMore && hideMoreItem }">
        <span v-if="!tagList.length" class="placeholder">{{placeholder}}</span>
        <span
          v-else
          v-for="(tag, index) in tagList"
          :key="index"
          class="ep-tag"
          :class="[
            size && `ep-tag--${size}`,
            {'ep-tag__checked': tag.checked},
          ]"
          :style="{
            color: hoverdTag === tag.value ? tag.checked ? '#fff' : color : '',
            backgroundColor: tag.checked ? color : ''
          }"
          @click.stop="handleSelect(tag)"
          @mouseover.stop="handleHoverd(true, tag)"
          @mouseout.stop="handleHoverd(false, tag)">
          {{tag.label}}
        </span>
      </div>
      <div class="list-more" v-show="showMore">
        <el-button type="text" class="btn-more" @click="hideMoreItem = !hideMoreItem">
          更多 <i :class="hideMoreItem ? 'el-icon-arrow-down' : 'el-icon-arrow-up'" />
        </el-button>
      </div>
    </section>
  </section>
</template>

<script>

import cloneDeep from 'lodash.clonedeep'
import omit from 'lodash.omit'

export default {
  name: 'elp-tag-select',
  props: {
    value: {
      type: [String, Array, Boolean, Number],
      default: ''
    },
    tags: {
      type: Array,
      required: true
    },
    props: {
      type: Object // 对照表({label: 'name', value: 'id'})
    },
    label: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: Number,
      default: 100
    },
    color: {
      type: String,
      default: '#00C4FF'
    },
    size: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    isRequired: {// 单选时是否是必选项目
      type: Boolean,
      default: false
    },
    labelInValue: {
      type: Boolean,
      default: false
    },
    showMore: { // 是否需要折叠
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String
    },
    noCancel: { // 不能取消当前选中
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tagList: [],
      hoverdTag: '',
      hideMoreItem: true
    }
  },
  watch: {
    tags: {
      handler () {
        this.init()
      },
      deep: true,
      immediate: true
    },
    value: function () {
      this.init()
    }
  },
  methods: {
    init () {
      let _tag = this.props ? this.tags.map(
        item => ({ ...item, label: item[this.props.label], value: item[this.props.value] })) : this.tags
      const tagList = cloneDeep(_tag)
      this.tagList = tagList.map((v, i) => {
        v.checked = this.multiple ? this.value.includes(v.value) : v.value === this.value
        return v
      })
    },
    handleSelect (tag) {
      if (this.noCancel && tag.checked) return

      let [modelValue, changeValue] = ['', '']
      if (this.multiple) {
        tag.checked = !tag.checked
        modelValue = this.tagList.filter(v => v.checked).map(v => v.value)
        changeValue = this.tagList.filter(v => v.checked).map(v => this.labelInValue ? omit(v, 'checked') : v.value)
      } else {
        let _hasSelected = false
        this.tagList.map(v => {
          if (this.isRequired) { v.checked = v.value === tag.value } else {
            if (v.value === tag.value) _hasSelected = v.checked
            v.checked = v.value === tag.value ? !v.checked : v.checked
          }
        })
        modelValue = _hasSelected ? '' : tag.value
        changeValue = this.labelInValue ? _hasSelected ? {} : omit(tag, 'checked') : _hasSelected ? '' : tag.value
      }
      this.$emit('input', modelValue)
      this.$emit('change', changeValue)
    },
    handleHoverd (isHoverd, tag) {
      this.hoverdTag = isHoverd ? tag.value : ''
    }
  }
}
</script>
