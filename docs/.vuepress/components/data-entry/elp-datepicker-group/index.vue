<template>
  <elp-datepicker-group
    v-model="dateGroupValue"
    @change="onChangeDateGroup"
  />
</template>

<script>
export default {
  name: 'docs-datepicker-group',
  data () {
    return {
      dateGroupValue: ''
    }
  },
  methods: {
    onChangeDateGroup ({datepickerType,value}) {
      console.log(datepickerType, value)
    }
  }
}
</script>

