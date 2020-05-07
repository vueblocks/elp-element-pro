<template>
  <elp-cascader-panel v-model="bindVal" :data-lists="dataLists"/>
</template>

<script>
export default {
  name: 'docs-cascader-panel',
  data () {
    return {
      bindVal: {},
      dataLists: [
        {
          id: '1',
          name: '家用电器',
          children: [
            {
              id: '11',
              name: '电视',
              children: [
                { id: '111', name: '曲面电视' },
                { id: '112', name: '超薄电视' }
              ]
            },
            {
              id: '12',
              name: '空调',
              children: [
                { id: '121', name: '壁挂式空调' },
                { id: '122', name: '柜式空调' },
                { id: '123', name: '中央空调' }
              ]
            },
            {
              id: '13',
              name: '洗衣机',
              children: [
                { id: '131', name: '滚筒洗衣机' },
                { id: '132', name: '洗烘一体机' },
                { id: '133', name: '波轮洗衣机' }
              ]
            },
            {
              id: '14',
              name: '冰箱',
              children: [
                { id: '141', name: '多门' },
                { id: '142', name: '对开门' },
                { id: '143', name: '双门' }
              ]
            }
          ]
        },
        {
          id: '2',
          name: '电脑/办公',
          children: [
            {
              id: '21',
              name: '电脑整机',
              children: [
                { id: '211', name: '笔记本' },
                { id: '212', name: '游戏本' },
                { id: '213', name: '平板电脑' },
                { id: '214', name: '一体机' },
                { id: '215', name: '工作站' }
              ]
            },
            {
              id: '22',
              name: '电脑配件',
              children: [
                { id: '221', name: '显示器' },
                { id: '222', name: 'CPU' },
                { id: '223', name: '主板' },
                { id: '224', name: '显卡' },
                { id: '225', name: '硬盘' }
              ]
            },
            {
              id: '23',
              name: '外设产品',
              children: [
                { id: '231', name: '鼠标' },
                { id: '232', name: '键盘' },
                { id: '233', name: 'U盘' }
              ]
            },
            {
              id: '24',
              name: '网络产品',
              children: [
                { id: '241', name: '路由器' },
                { id: '242', name: '机顶盒' },
                { id: '243', name: '交换机' }
              ]
            },
            {
              id: '25',
              name: '办公设备',
              children: [
                { id: '251', name: '投影仪' },
                { id: '252', name: '打印机' },
                { id: '253', name: '传真设备' }
              ]
            },
            {
              id: '26',
              name: '文具',
              children: [
                { id: '261', name: '笔类' },
                { id: '262', name: '便签/本册' },
                { id: '263', name: '文件收纳' }
              ]
            }
          ]
        },
        {
          id: '3',
          name: '服饰',
          children: []
        }
      ]
    }
  },
  watch: {
    bindVal: {
      handler () {
        console.dir(this.bindVal)
      },
      deep: true
    }
  }
}
</script>

