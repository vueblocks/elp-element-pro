---
title: elp-card 卡片
sidebarDepth: 0
---

## elp-card

常用于的场景：表单填写，详情的展示，以及查询条件的罗列

#### 表单填写

<code-card compName="docs-card">
<<< @/docs/.vuepress/components/layout/elp-card/index.vue
</code-card>

#### 查询条件

<code-card compName="docs-card-query">
<<< @/docs/.vuepress/components/layout/elp-card/query.vue
</code-card>

#### 详情展示

<code-card compName="docs-card-detail">
<<< @/docs/.vuepress/components/layout/elp-card/detail.vue
</code-card>

#### Attributes
参数|说明|类型|可选值|默认值
--|:--|:--|:--|:--|:--
title|标签|string
subTitle|副标题|string
tooltip|提示语|string

#### Slot
name | 说明
--|:--
operate|card头部可自定义靠右的操作按钮