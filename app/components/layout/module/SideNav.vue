<template>
  <nav class="side-nav">
    <el-menu
      router
      class="page-layout-menu__menu-group"
      :collapse-transition="false"
      :default-active="activeRoute">
      <ul v-for="(item, index) in menuList" :key="index">
        <el-menu-item v-if="!item.resources.length" :index="item.url" class="custom-menu">
          <!-- <svg-icon :icon-class="item.css || ''" :className="activeRoute === item.url" /> -->
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
        <el-submenu v-else :index="item.url" class="el-submenu">
          <template slot="title">
            <!-- <svg-icon :icon-class="item.css|| ''" /> -->
            <span>{{ item.name }}</span>
          </template>
          <ul v-for="(subItem, subIndex) in item.resources" :key="subIndex">
            <el-menu-item class="custom-menu" v-if="!subItem.resources.length" :index="subItem.url">
              <!-- <svg-icon :icon-class="subItem.css || ''" :className="activeRoute === subItem.url" :key="activeRoute" /> -->
              <span slot="title">{{ subItem.name }}</span>
            </el-menu-item>
            <el-submenu v-else :index="subItem.url" class="el-submenu">
              <template slot="title">
                <div class="sub-title">
                  <!-- <svg-icon :icon-class="subItem.css || ''" /> -->
                  <span>{{ subItem.name }}</span>
                </div>
              </template>
              <el-menu-item
                v-for="(innerItem) in subItem.resources" :key="innerItem.name"
                :index="innerItem.url"
                class="custom-menu">
                <div slot="title" class="inner-title">{{ innerItem.name }}</div>
              </el-menu-item>
            </el-submenu>
          </ul>
        </el-submenu>
      </ul>
    </el-menu>

  </nav>
</template>

<script>
import { routerNav } from '@/constant.js'
export default {
  data () {
    return {
      menuList: routerNav
    }
  },
  computed: {
    activeRoute: function () {
      let _level = this.calcCurLevel()
      // 如果路由层级大于2则视为是层级1的子页面，高亮层级1的菜单
      const routeLevel = this.$route.path.split('/').length - 1
      const routePath = this.$route.path.split('/', _level + 1).join('/')
      return routeLevel > _level ? routePath : this.$route.path
    }
  },
  methods: {
    calcCurLevel () {
      // 计算当前层级 若有子菜单 确认为2级
      let _topUrl = this.$route.path.split('/', 2).join('/') || ''
      let _curMenu = this.menuList.find(item => item.url === _topUrl)
      return _curMenu && _curMenu.resources.length ? 2 : 1
    }
  }
}
</script>

<style lang="less">
.page-layout-menu {
  &__menu-group {
    border: 0;
    .sub-title {
      margin-left: 22px;
      color: #99ABB4;
    }
    .custom-menu {
      padding: 0 32px !important;
      height: 40px;
      line-height: 40px;
      color: #34495E;
      font-size: 14px;
      background-color: #EFF1F4;
      &:hover {
        background-color: #e3e6e9;
      }
      &.is-active, .active {
        color: #fff;
        background: #00C4FF;
      }
    }

    .el-submenu {
      &__title {
        background-color: #EFF1F4;
        line-height: 40px;
        height: 40px;
        color: #34495E;
        padding: 0 32px !important;
        &:hover {
          background-color: #E3E6E9;
        }
      }
      .el-menu {
        line-height: 40px;
        background-color: #EFF1F4;
        .el-menu-item {
          padding: 0 56px !important;
          color: #99ABB4;
        }
        .el-menu-item:focus, .el-menu-item:hover {
          background-color: #E3E6E9;
        }
        .el-menu-item.is-active {
          background-color: #00C4FF;
          color: #fff;
          &:focus,
          &:hover {
            background-color: #00C4FF;
          }
        }
      }
      .inner-title {
        margin-left: 18px;
      }
    }
  }
}

</style>
