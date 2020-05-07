export default [
  {
    path: 'cascader',
    component: () => import('@/views/data-entry/cascader'),
    children: [
      {
        path: 'collapse-checkbox',
        component: () => import('@/views/data-entry/cascader/collapse-checkbox')
      }
    ]
  }
]
