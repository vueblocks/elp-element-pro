<template>
  <section>
    <elp-cascader-editor
      v-model="selectVal"
      listHeight="200px"
      showSearch="all"
      :cascaderLevel="level"
      :cascade-data="cascadeData" />
      <span class="level">层级:</span>
      <el-radio-group v-model="level">
        <el-radio :label="1">1层</el-radio>
        <el-radio :label="2">2层</el-radio>
        <el-radio :label="3">3层</el-radio>
      </el-radio-group>
  </section>
</template>

<script>
export default {
  name: 'docs-cascader-editor',
  data () {
    return {
      level: 3,
      selectVal: [],
      cascadeData: [
        {
          label: '站内免费流量',
          value: 4,
          children: [
            {
              label: '其他站内页面',
              value: 444,
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
    }
  }
}
</script>

<style lang="less" scoped>
.level {
  font-size: 14px;
  margin: 0 10px 0 35px;
}
</style>