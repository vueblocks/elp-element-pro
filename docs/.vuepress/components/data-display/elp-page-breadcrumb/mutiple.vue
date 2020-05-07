<template>
  <div>
    <elp-page-breadcrumb :routes="routes" />
  </div>
</template>

<script>
export default {
  name: 'docs-page-breadcrumb-mutiple',
  data () {
    return {
      routes: ['标签应用','智能人群','创建'],
      params: [{ id:10 }, { id:10 }]
    }
  }
}
</script>
