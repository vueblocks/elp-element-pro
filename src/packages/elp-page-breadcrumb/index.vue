<template>
  <section class="elp-page-breadcrumb">
    <span class="title" v-if="routes.length === 1">{{pageTitle}}</span>
    <el-breadcrumb
      v-else-if="routes.length > 1"
      separator-class="el-icon-arrow-right"
      class="breadcrumb"
    >
      <el-breadcrumb-item
        v-for="(item, index) in routeList"
        :key="index"
        :to="item.to"
      >
        {{item.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </section>
</template>

<script>
import cloneDeep from 'lodash.clonedeep'

export default {
  name: 'elp-page-breadcrumb',
  props: {
    routes: {
      type: Array,
      default: () => []
    },
    params: {
      type: Array,
      default: () => []
    },
    query: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    pageTitle () {
      const routes = cloneDeep(this.routes)
      return routes.pop()
    },
    routeList () {
      const routeLevel = this.$route.path.split('/').length - 1
      const routesLength = this.routes.length
      return this.routes.map((v, i) => {
        const to = {
          path: this.$route.path.split('/', routeLevel - routesLength + i + 2).join('/'),
          params: this.params[i] || null,
          query: this.query[i] || null
        }
        return i < routesLength - 1 ? { name: v, to } : { name: v }
      })
    }
  }
}
</script>
