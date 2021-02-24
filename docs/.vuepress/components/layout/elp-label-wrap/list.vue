<template>
  <div>
    <elp-label-wrap-group
      :detailList="detailList"
    />
  </div>
</template>

<script>
export default {
  name: 'docs-label-wrap-list',
  data () {
    return {
      detailList: [
        { label: '字段类型：', content: '枚举型' },
        { label: '超长折叠：', content: '长文本'.repeat(25), attrs: { maxHeight: '27px' } },
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
        },
        {
          label: '自定义html：',
          html: `<span>
            点
            <a href="//devnode.jd.com" target="_blank">element-ui-pro</a>
            跳转
          </span>`
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>