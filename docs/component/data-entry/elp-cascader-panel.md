---
title: elp-cascader-panel 三级级联选择器
sidebarDepth: 0
---

## elp-cascader-panel

#### 基本示例

默认只能选择到3级

<code-card compName="docs-cascader-panel">
<<< @/docs/.vuepress/components/data-entry/elp-cascader-panel/index.vue
</code-card>

一二三级均可点选

<code-card compName="docs-cascader-panel-mutiple">
<<< @/docs/.vuepress/components/data-entry/elp-cascader-panel/mutiple.vue
</code-card>

#### Attributes
参数|说明|类型|可选值|默认值
--|:--|:--|:--|:--
data-lists|三级目录填充值，由对象{ id: "", name: ""}组成 | Array
select-all-levels|是否三级目录都可点选|Boolean|-|false

#### Methods

方法名|说明|参数
:--|:--|:--
clear| 清空所选项目|-

#### events
事件|说明|返回
--|:--|:--
change|chang时触发