<template>
  <section
    class="elp-table-operate"
    :class="{ 'elp-table-operate--icon': showIcon }"
  >
    <el-button
      v-for="(item, index) in preData"
      :key="index"
      type="text"
      class="operate-btn"
      :icon="item.icon"
      @click="handleClick(item)"
    >{{item.label}}</el-button>
    <el-dropdown v-if="ifOverLength" >
      <el-button v-if="iconOrName === 'icon'" type="text" icon="el-icon-more"></el-button>
      <el-button v-else class="operate-dropdown" type="text">更多</el-button>
      <el-dropdown-menu
        slot="dropdown"
        class="elp-table-operate__drop"
        :class="{ 'elp-table-operate__drop--icon': showIcon}"
      >
        <el-dropdown-item v-for="(item, index) in buttonData.slice(maxLen)" :key="index">
          <el-button
            class="operate-btn"
            type="text"
            :icon="item.icon"
            @click="handleClick(item)"
          >
            {{item.label}}
          </el-button>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </section>
</template>

<script>
export default {
  name: 'elp-table-operate',
  props: {
    list: {
      type: Array,
      default () { return [] }
    },
    maxLen: {
      type: Number,
      default () { return 2 }
    }
  },
  computed: {
    buttonData () {
      let arr = this.list.filter(item => {
        if (typeof item.hide === 'function') return !item.hide()
        return !item.hide
      })
      return arr
    },
    ifOverLength () {
      return this.buttonData.length > this.maxLen
    },
    preData () {
      return this.buttonData.slice(0, this.maxLen)
    },
    iconOrName () {
      return this.list[0].icon ? 'icon' : 'label'
    },
    showIcon () {
      return this.iconOrName === 'icon'
    }
  },
  methods: {
    handleClick (item) {
      if (item.event) { this.$emit('eventHandle', item.event) }
      if (item.eventName) this.$emit('handleEvent', item.eventName)
    }
  }
}
</script>
