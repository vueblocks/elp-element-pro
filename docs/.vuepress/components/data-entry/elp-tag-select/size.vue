<template>
  <div>
    <elp-tag-select
      v-model="classify1"
      label="选择"
      size="medium"
      :tags="tags"/>
    <elp-tag-select
      v-model="classify2"
      label="选择"
      size="small"
      :tags="tags"/>
    <elp-tag-select
      v-model="classify3"
      label="选择"
      size="mini"
      :tags="tags"/>
  </div>
</template>

<script>
export default {
  name: 'docs-tag-select-size',
  data () {
    return {
      classify1: 'val1',
      classify2: 'val2',
      classify3: 'val3',
      tags: [
        { label: '标签一', value: 'val1' },
        { label: '标签二', value: 'val2' },
        { label: '标签三', value: 'val3' }
      ]
    }
  }
}
</script>

<style scoped>

</style>