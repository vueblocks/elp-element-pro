---
title: elp-datepicker-group 日期选择组
sidebarDepth: 0
---

## elp-datepicker-group

可按日、周、月选择日期，常用于列表、表格过滤。

#### 基本使用

<code-card compName="docs-datepicker-group">
<<< @/docs/.vuepress/components/data-entry/elp-datepicker-group/index.vue
</code-card>


#### 可通过 dateAttrs 等定义选择器的属性

<code-card compName="docs-datepicker-group-more">
<<< @/docs/.vuepress/components/data-entry/elp-datepicker-group/more.vue
</code-card>


#### Attributes
参数|说明|类型|可选值|默认值
--|:--|:--|:--|:--
value|当前选中的日期值|string|-|-
groupType| 支持的选择范围 | array | 'date', 'week', 'month' |  ['date', 'week', 'month']
size| 尺寸| string | large, small, mini | large
defaultPickerType| 默认选择的类型 | string| - | groupType 第一项
disabled| 是否禁用 | boolean | - | false
dateAttrs | type 为 date 时 的属性 | 详细可见 [DatePicker](https://element.eleme.cn/#/zh-CN/component/date-picker) | - | -
weekAttrs | type 为 week 时 的属性 | 详细可见 [DatePicker](https://element.eleme.cn/#/zh-CN/component/date-picker) | - | -
monthAttrs | type 为 month 时 的属性 | 详细可见 [DatePicker](https://element.eleme.cn/#/zh-CN/component/date-picker) | - | -

#### Events
事件名称|说明|回调参数
:--|:--|:--
change|切换日期或日期类型时触发|Function({datepickerType, value})