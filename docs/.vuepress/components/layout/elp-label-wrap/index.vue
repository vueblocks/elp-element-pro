<template>
  <div>
    <elp-label-wrap label="示例名称：">{{text}}</elp-label-wrap>
    <elp-label-wrap label="超长文本：" overflow :hideContent="text">{{text}}</elp-label-wrap>
    <elp-label-wrap label="超长折叠：" maxHeight="56px">{{longText}}</elp-label-wrap>
    <elp-label-wrap required label="必要展示：">基本展示</elp-label-wrap>
    <elp-label-wrap tooltip="提示语" label="提示语：">基本展示</elp-label-wrap>
    <elp-label-wrap label="联系人：" erp="liukai154">刘凯(liukai154)</elp-label-wrap>
    <elp-label-wrap label="覆盖量：" num="12345678" />
    <elp-label-wrap
      label="跳转链接："
      :link="{url: '//devnode.jd.com', content: 'element-ui-pro'}"
    />
  </div>
</template>

<script>
  export default {
    name:'docs-label-wrap',
    data () {
      return {
        text: 'elp-label-wrap;'.repeat(10),
        longText: 'elp-label-wrap;'.repeat(25)
      }
    }
  }
</script>

<style lang="less" scoped>
</style>