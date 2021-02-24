<template>
  <div :class="wrapClass" >
    <label :required="required" class="elp-label-wrap__label">
      {{label}}
      <el-tooltip :content="tooltip">
        <i class="el-icon-warning icon-custom" v-if="tooltip"></i>
      </el-tooltip>
    </label>
    <div class="elp-label-wrap__content">
      <el-tooltip :disabled="!overflow" :content="hideContent">
        <div class="text-area">
          <span v-if="num !== undefined">{{locale(num)}}</span>
          <elp-text-ellipse v-if="maxHeight" :maxHeight="maxHeight">
            <slot></slot>
          </elp-text-ellipse>
          <slot v-else></slot>
          <a :href="link.url" target="_blank" v-if="link.url">{{link.content}}</a>
          <elp-dongdong v-if="erp" :erp="erp"/>
        </div>
      </el-tooltip>
      <div class="placeholder" v-if="overflow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'elp-label-wrap',
  props: {
    label: {
      required: true,
      type: String
    },
    required: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: String
    },
    erp: {
      type: String
    },
    num: {
      type: [String, Number]
    },
    link: {
      type: Object,
      default () { return {} }
    },
    overflow: {
      type: Boolean,
      default: false
    },
    hideContent: {
      type: String,
      default: ''
    },
    maxHeight: {
      type: String
    }
  },
  computed: {
    wrapClass () {
      return {
        'elp-label-wrap': true,
        'elp-label-wrap--overflow': this.overflow
      }
    }
  },
  methods: {
    locale (num) {
      let _num = Number(num)
      return isNaN(_num) ? '' : _num.toLocaleString()
    }
  }
}
</script>
