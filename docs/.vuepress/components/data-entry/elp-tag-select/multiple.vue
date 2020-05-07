<template>
  <div>
    <elp-tag-select
      v-model="classify1"
      label="单选"
      :label-width="60"
      :tags="tags"/>
    <elp-tag-select
      v-model="classify2"
      is-required
      label="必选"
      :label-width="60"
      :tags="tags"/>
    <elp-tag-select
      v-model="classify3"
      multiple
      label="多选"
      :label-width="60"
      :tags="tags"/>
  </div>
</template>

<script>
export default {
  name: 'docs-tag-select-multiple',
  data () {
    return {
      classify1: 'val1',
      classify2: 'val2',
      classify3: ['val1', 'val3'],
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