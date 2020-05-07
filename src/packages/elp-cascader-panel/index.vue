<template>
  <section class="elp-cascader-panel">
    <section class="elp-cascader-panel__left">
      <ul>
        <li
          v-for="(first, idx) in dataLists"
          class="first-item"
          :class="{'first-item--active': currentSelect.first.id === first.id }"
          :key="idx"
          @click="onSelectFirst(first)">
          {{first.name}}
          <i :class="{ 'el-icon-arrow-right': currentSelect.first.id === first.id }"/>
        </li>
      </ul>
    </section>
    <section class="elp-cascader-panel__right">
      <ul v-if="secondLists.length > 0">
        <li v-for="(second,idx) in secondLists" :key="idx">
          <div
            class="second-item"
            :class="{
              'second-item--select': selectAllLevels,
              'second-item--active': currentSelect.second.id === second.id
            }"
          >
            <span
              v-if="selectAllLevels"
              @click="onSelectSecond(second)">
              {{ second.name }}
            </span>
            <span v-else> {{ second.name }}</span>
          </div>
          <div class="container">
            <span
              v-for="(third,idx) in second.children"
              class="third-item"
              :key="idx"
              :class="{'third-item--active': currentSelect.third.id === third.id }"
              @click="onSelectThird(second, third)"
            >
              {{ third.name }}
            </span>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>

const DEFAULT_ITEM = { id: '', name: '' }

export default {
  name: 'elp-cascader-panel',
  props: {
    dataLists: {
      type: Array,
      required: true,
      default () { return [] }
    },
    selectAllLevels: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default () {
        return {
          first: DEFAULT_ITEM,
          second: DEFAULT_ITEM,
          third: DEFAULT_ITEM
        }
      }
    }
  },
  data () {
    return {
      currentSelect: {}
    }
  },
  computed: {
    secondLists () {
      let _secondLists = []
      this.dataLists.forEach(item => {
        if (item.id === this.currentSelect.first.id) _secondLists = item.children
      })
      return _secondLists
    }
  },
  created () {
    this.currentSelect = Object.keys(this.value).length ? this.value : { first: DEFAULT_ITEM, second: DEFAULT_ITEM, third: DEFAULT_ITEM }
    if (this.currentSelect.first.id === '') {
      let { id, name } = this.dataLists[0] || []
      this.currentSelect.first = { id, name }
    }
  },
  methods: {
    onSelectFirst (item) {
      let _first = { id: item.id, name: item.name }
      this.currentSelect = { first: _first, second: DEFAULT_ITEM, third: DEFAULT_ITEM }
      let _result = this.selectAllLevels ? this.currentSelect : {}
      this.$emit('input', _result)
      this.$emit('change', _result)
    },
    onSelectSecond (item) {
      this.currentSelect.second = { id: item.id, name: item.name }
      this.currentSelect.third = DEFAULT_ITEM
      if (this.selectAllLevels) {
        this.$emit('input', this.currentSelect)
        this.$emit('change', this.currentSelect)
      }
    },
    onSelectThird (second, third) {
      this.currentSelect.second = { id: second.id, name: second.name }
      this.currentSelect.third = third
      this.$emit('input', this.currentSelect)
      this.$emit('change', this.currentSelect)
    },
    clear () {
      this.currentSelect = {
        ...this.currentSelect,
        second: DEFAULT_ITEM,
        third: DEFAULT_ITEM
      }
      this.$emit('input', {})
      this.$emit('change', {})
    }
  }
}
</script>

<style lang="less" scoped>

</style>
