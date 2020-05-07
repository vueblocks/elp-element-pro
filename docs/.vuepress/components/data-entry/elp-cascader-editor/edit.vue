<template>
  <elp-cascader-editor
    listHeight="200px"
    v-model="selectVal"
    :cascaderLevel="2"
    :cascade-data="cascadeData"
    :showAdd="[0, 1]"
    showEdit="all"
    showDelete="all"
    @edit-add="onAdd"
    @edit-enter="onEditName"
    @edit-delete="onDelete"
  >
    <template v-slot:custom="slotProps">
      <i class="el-icon-warning" @click.stop="onWarn(slotProps.scope)"></i>
    </template>
    </span>
  </elp-cascader-editor>
</template>

<script>
import cloneDeep from 'lodash.clonedeep'
export default {
  name: 'docs-cascader-editor-edit',
  data () {
    return {
      cascadeData: [
        {
          label: '站内免费流量',
          value: 4,
          children: [
            {
              label: '其他站内页面',
              value: 444,
              editable: false,
              deleteable: false,
              children: [
                { label: 'EDM', value: '4003002' },
                { label: 'ERP', value: '4003' }
              ],
            },
            {
              label: '商品详情',
              value: '4005',
              children: [
                { label: '3D商详主页', value: '4005001' },
                { label: '优惠套装页', value: '4005002' }
              ],
            },
            {
              label: '店铺',
              value: '4006',
              children: [
                { label: '店铺优惠券', value: '4006004' },
                { label: '店铺促销页', value: '4006006' }
              ]
            }
          ]
        },
        {
          label: 'EDI',
          value: 5,
          children: [
            {
              label: 'EDI站内页面',
              value: '4003',
              children: [
                { label: 'EDM', value: '4003002' },
                { label: 'ERP', value: '4003003' }
              ]
            },
            {
              label: 'EDI商品详情',
              value: '4005',
              children: [
                { label: '3D商详主页', value: '4005001' },
                { label: '优惠套装页', value: '4005002' }
              ]
            },
            {
              label: '店铺',
              value: '4006',
              children: [
                { label: '店铺优惠券', value: '4006004' },
                { label: '店铺促销页', value: '4006006' }
              ]
            }
          ]
        }
      ],
      selectVal: []
    }
  },
  methods: {
    onAdd ({ level, label, selectVal }) {
      let _parent = this.selectVal.slice(0, level)
      let _list = this.cascadeData
      _parent.forEach(value => {
        _list = _list.find(item => item.value === value).children
      })
      _list.push({ label, value: new Date().getTime(), children: [] })
    },
    onEditName ({ level, editNode }) {
      let _parent = this.selectVal.slice(0, level)
      let _list = this.cascadeData
      _parent.forEach( value => {
        _list = _list.find(item => item.value === value).children
      })
      let { value, newName } = editNode
      let _cur = _list.find(item => item.value === value)
      _cur.label = newName
    },
    onDelete ({ level, editNode }) {
      const { value } = editNode
      let _newVal = []
      const combineTree = (parent, cur, deleVal) => {
        cur.forEach(it => {
          if (it.value !== deleVal) {
            let _newCur = {
              ...it,
              children: []
            }
            parent.push(_newCur)
            combineTree(_newCur.children || [], it.children || [], deleVal)
          }
        })
      }
      combineTree(_newVal, this.cascadeData, value)
      this.cascadeData = _newVal
    },
    onWarn ({ item, level }) {
      this.$message.info(`level-${level},value-${item.value}`)
    }
  }
}
</script>
