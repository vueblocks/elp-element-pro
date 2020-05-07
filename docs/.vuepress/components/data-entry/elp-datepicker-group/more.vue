<template>
  <elp-datepicker-group
    v-model="dateGroupValue"
    :dateAttrs="dateAttrs"
    @change="onChangeDateGroup"
  />
</template>

<script>
export default {
  name: 'docs-datepicker-group-more',
  data () {
    return {
      dateGroupValue: '',
      dateAttrs: {
        'picker-options': {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        }
      }
    }
  },
  methods: {
    onChangeDateGroup ({datepickerType,value}) {
      console.log(datepickerType, value)
    }
  }
}
</script>

