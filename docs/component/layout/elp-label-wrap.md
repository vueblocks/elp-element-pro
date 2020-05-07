---
title: elp-label-wrap 标签容器
sidebarDepth: 0
---

## elp-label-wrap

常用于的场景：详情的展示

#### 基本示例

<code-card compName="docs-label-wrap">
<<< @/docs/.vuepress/components/layout/elp-label-wrap/index.vue
</code-card>

#### elp-label-wrap-group 布局
> 通过 eachColNum 可以指定每行展示多少列

<code-card compName="docs-label-wrap-group">
<<< @/docs/.vuepress/components/layout/elp-label-wrap/group.vue
</code-card>

#### elp-label-wrap-group list定义内容
> 通过 detailList 列表传入显示的内容

<code-card compName="docs-label-wrap-list">
<<< @/docs/.vuepress/components/layout/elp-label-wrap/list.vue
</code-card>

#### elp-label-wrap Attributes
参数|说明|类型|可选值|默认值
--|:--|:--|:--|:--|:--
label|标题|string
required|是否必须|boolean|-|false
tooltip|提示语|string
erp|咚咚弹出erp|string
num|需要分隔的数字|number,string
overflow| 是否需要隐藏超长文本| boolean | - | false
hideContent| 需配合overflow使用，当文本超出一行时需要在tooltip 展示得文本, 不超出不展示 | string
link| 需要跳转的链接 link:{url,content}|object

#### elp-label-wrap-group Attributes
参数|说明|类型|可选值|默认值
--|:--|:--|:--|:--|:--
eachColNum|每行的列数|number|-|1
labelWidth|标签宽度|string|
labelPosition| 标签位置| string|left,right,top|left
detailList| 需要展示的列表

#### detailList Attributes
参数|说明|类型|可选值|默认值
--|:--|:--|:--|:--|:--
label|标题|string
content| 内容| string
html| v-html 定义的渲染内容| string
attrs| 对应 elp-label-wrap 的属性| object