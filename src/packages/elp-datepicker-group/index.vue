<template>
  <div class="elp-datepicker-group">
    <el-select
      class="datepicker-group-select"
      v-model="datepickerType"
      :size="size"
      :disabled="disabled"
      placeholder="请选择"
      @change="onChangeType">
      <el-option
        v-for="item in checkOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-date-picker
      class="datepicker-group-datepicker"
      v-bind="extraAttrs"
      v-model="bindValue"
      :size="size"
      :key="datepickerType"
      :type="datepickerType"
      :disabled="disabled"
      @change="onChangeDay">
    </el-date-picker>
  </div>
</template>

<script>

export default {
  name: 'elp-datepicker-group',
  props: {
    value: {
      type: [Date, String, Array]
    },
    groupType: {
      type: Array,
      default () { return ['date', 'week', 'month'] }
    },
    size: {
      type: String,
      default: 'large'
    },
    defaultPickerType: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dateAttrs: {
      type: Object,
      default () { return { } }
    },
    weekAttrs: {
      type: Object,
      default () { return {} }
    },
    monthAttrs: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {
      datepickerType: ''
    }
  },
  computed: {
    checkOptions () {
      let _options = [
        { label: '按日查询', value: 'date' },
        { label: '按周查询', value: 'week' },
        { label: '按月查询', value: 'month' }
      ]
      return this.groupType.map(item => {
        let _cur = _options.find(it => it.value === item)
        return _cur || {}
      })
    },
    bindValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    extraAttrs () {
      let _default = {
        date: {
          placeholder: '选择日期',
          format: 'yyyy-MM-dd'
        },
        week: {
          placeholder: '选择周',
          format: 'yyyy 第 WW 周'
        },
        month: {
          placeholder: '选择月',
          format: 'yyyy 年 MM 月'
        }
      }
      let _name = this.datepickerType + 'Attrs'
      return Object.assign(_default[this.datepickerType], this[_name], this.$attrs)
    }
  },
  watch: {
    groupType: {
      handler (val) {
        this.datepickerType = this.defaultPickerType ? this.defaultPickerType : val[0] || ''
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    onChangeType (val) {
      this.$emit('input', '')
      this.$emit('change', { datepickerType: this.datepickerType, value: this.value })
    },
    onChangeDay () {
      this.$emit('change', { datepickerType: this.datepickerType, value: this.value })
    }
  }
}
</script>
