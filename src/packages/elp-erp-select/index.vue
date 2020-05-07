<template>
  <el-select
    remote
    clearable
    filterable
    default-first-option
    class="elp-erp-select"
    v-model="selectVal"
    :loading="loading"
    v-loading="loading"
    :size="size"
    :multiple="multiple"
    :disabled="disabled"
    :placeholder="placeholder"
    :remote-method="getErpList"
  >
    <el-option
      v-for="(item,idx) in erpList"
      :key="`${item[request.value]}_${idx}`"
      :label="item[request.label] + '(' + item[request.value] + ')'"
      :value="item[request.value]"
    />
  </el-select>
</template>

<script>
import Service from './service'

export default {
  name: 'elp-erp-select',
  props: {
    value: [String, Array],
    size: {
      type: String
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    labelInValue: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    requestParams: {
      type: Object
    }
  },
  data () {
    return {
      loading: false,
      erpList: [],
      erpListSelected: [] // 多选时记录选中对象
    }
  },
  watch: {
    selectVal: {
      handler: function (v) {
        this.resetSelect()
      },
      immediate: true
    }
  },
  methods: {
    async remoteService (userAccount) {
      let _erpList = null
      if (userAccount) {
        if (!this.request.params) return
        this.loading = true
        const options = await Service.getErpList({
          [this.request.params]: userAccount
        }, this.request.url)
        this.loading = false
        _erpList = options
      } else {
        _erpList = []
      }
      return _erpList
    },
    async getErpList (userAccount) {
      const _erpList = await this.remoteService(userAccount)
      if (this.multiple) {
        this.erpList = [..._erpList, ...this.erpListSelected]
        return
      }
      this.erpList = [..._erpList]
    },
    async resetSelect () {
      if (this.multiple) { // 多选
        let _selectedList = []
        if (!this.request.params) return
        const res = await Promise.all(this.selectVal.map(item => this.remoteService(item))).catch(err => err)
        res.forEach((_erpList, idx) => {
          if (Array.isArray(_erpList)) {
            let _info = _erpList.find(v => v[this.request.value] === this.selectVal[idx])
            if (_info) _selectedList.push(_info)
          }
        })
        this.erpListSelected = [..._selectedList]
        this.erpList = [...this.erpListSelected]
        let returnVal = this.labelInValue ? _selectedList : _selectedList.map(item => item[this.request.value])
        this.$emit('change', returnVal)
      } else {
        const _erpList = await this.remoteService(this.selectVal) || []
        const erpInfo = _erpList.find(v => v[this.request.value] === this.selectVal) || {}
        let returnVal = this.labelInValue ? erpInfo : this.selectVal
        this.erpListSelected = Object.keys(erpInfo).length ? [{ ...erpInfo }] : []
        this.erpList = [...this.erpListSelected]
        this.$emit('change', returnVal)
      }
    }
  },
  computed: {
    selectVal: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    request () {
      let globalParams = this.$eleUiProGlobal['elpErpSelect'] || {}
      return this.requestParams || globalParams.requestParams || {}
    }
  }
}
</script>
