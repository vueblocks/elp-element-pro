<template>
  <elp-card
    style="border:1px solid #E3E6E8"
    title="基本信息"
  >
    <elp-label-wrap-group
      :detailList="detailList"
      :eachColNum="3"
    />
  </elp-card>
</template>

<script>
export default {
  name: 'docs-card-detail',
  data () {
    return {
      detailList: [
        { label: '字段类型：', content: '枚举型' },
        {
          label: '负责人：',
          content: '刘凯(liukai154)',
          attrs: {erp: 'liukai154' }
        },
        {
          label: '覆盖量：', attrs: { num: 326319809 }
        },
        {
          label: '名称：',
          content: '基本名称',
          attrs: { required: true }
        },
        {
          label: '统计数：',
          content: '万',
          attrs: { tooltip: 'T+1生效', num: 12222 }
        },
        {
          label: '跳转链接：',
          content: '前往',
          attrs: { link: { url: '//devnode.jd.com', content: 'element-ui-pro' } }
        }
      ]
    }
  }
}
</script>
