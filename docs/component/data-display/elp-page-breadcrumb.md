---
title: elp-page-breadcrumb 面包屑
sidebarDepth: 0
---
## elp-page-breadcrumb

#### 单路由
<code-card compName="docs-page-breadcrumb">
<<< @/docs/.vuepress/components/data-display/elp-page-breadcrumb/index.vue
</code-card>

#### 多路由
+ 可点击跳转至前一页面
  >eg: /label/manage/detail 点击前一层默认跳转至 /label/manage 所以路由需保持层级结构
+ 跳转时路由对象可携带 params 和 query

<code-card compName="docs-page-breadcrumb-mutiple">
<<< @/docs/.vuepress/components/data-display/elp-page-breadcrumb/mutiple.vue
</code-card>

#### Attributes
参数|说明|类型|可选值|默认值
--|:--|:--|:--|:--
routes|导航路由| array|-|-
params|路由携带params,与routes逐个对应|array|-|-
query|路由携带query,与routes逐个对应|array|-|-
