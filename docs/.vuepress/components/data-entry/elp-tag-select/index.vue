<template>
  <div>
    <elp-tag-select
      v-model="classify1"
      label="超出隐藏"
      :tags="tags"/>
    <elp-tag-select
      v-model="classify2"
      label="超出展开"
      :show-more="false"
      :tags="tags"/>
    <elp-tag-select
      v-model="classify3"
      label="无数据"
      placeholder="暂无数据"
      :tags="[]"/>
  </div>
</template>

<script>
export default {
  name: 'docs-tag-select',
  data () {
    return {
      classify1: 'val1',
      classify2: 'val2',
      classify3: '',
      tags: [
        { label: '很长的标签一', value: 'val1' },
        { label: '很长的标签二', value: 'val2' },
        { label: '很长的标签三', value: 'val3' },
        { label: '很长的标签四', value: 'val4' },
        { label: '很长的标签五', value: 'val5' }
      ]
    }
  }
}
</script>

<style scoped>

</style>