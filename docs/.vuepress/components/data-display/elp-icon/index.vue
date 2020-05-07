<template>
  <ul class="contain">
    <li
      class="contain__item"
      v-for="(item, idx) in nameList"
      :key="idx"
    >
      <elp-icon :name="item" size="20px"/>
      <span class="title">{{item}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'docs-icon',
  data () {
    return {
      nameList: []
    }
  },
  created () {
    const files = require.context('../../../../../src/assets/icons', false, /\.svg$/)
    files.keys().forEach(path => {
      let name = path.match(/^\.\/(.*)\.svg$/)[1]
      this.nameList.push(name)
    })
  }
}
</script>

<style scoped lang="less">
.contain {
  list-style: none;
  display: inline-flex;
  flex-wrap: wrap;
  padding:0;
  border-top:1px solid #eee;
  border-left:1px solid #eee;
  &__item {
    width:96px;
    min-height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    .title {
      font-size: 12px;
    }
  }
}
</style>