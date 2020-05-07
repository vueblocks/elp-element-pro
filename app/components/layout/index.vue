<template>
  <el-container class="layout">
    <el-aside width="256px" class="layout__aside">
      <header class="header">
        <img src="~@/assets/images/logo.png" style="width:32px;height:32px"/>
        <a target="/"><h3>Element UI Pro</h3></a>
      </header>
      <side-nav />
    </el-aside>
    <el-main class="layout__main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>

import SideNav from './module/SideNav'

export default {
  components: {
    SideNav
  }
}
</script>

<style lang="less" scoped>
.layout {
  &__aside {
    min-height: 100vh;
    border-right: 1px solid #E3E6E8;
    background: #EFF1F4;
    .header {
      height: 64px;
      padding: 0 20px;
      display: flex;
      background: #EFF1F4;
      align-items: center;
      justify-content: space-between;
      a {
        h3 {
          color: #34495E;
          font-size: 20px;
          font-weight: 600;
        }
      }
    }
  }
  &__main {
    padding: 30px;
  }
}
</style>
