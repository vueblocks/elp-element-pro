export const routerNav = [
  {
    name: '数据输入',
    url: '/data-entry',
    resources: [
      {
        name: '级联选择器',
        url: '/data-entry/cascader',
        resources: [
          { name: '折叠选择器', url: '/data-entry/cascader/collapse-checkbox', resources: [] }
        ]
      }
    ]
  },
  {
    name: '数据展示',
    url: '/data-display',
    resources: [
      { name: '咚咚', url: '/data-display/dongdong', resources: [] },
      { name: '图标', url: '/data-display/icon', resources: [] }
    ]
  }
]
