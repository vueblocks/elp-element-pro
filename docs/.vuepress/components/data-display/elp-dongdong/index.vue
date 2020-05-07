<template>
  <div>
    <span>{{name}}</span>
    <elp-dongdong :erp="erp"></elp-dongdong>
  </div>
</template>

<script>
export default {
  name: 'docs-dongdong',
  data () {
    return {
      name: '刘凯',
      erp: 'liukai154'
    }
  }
}
</script>