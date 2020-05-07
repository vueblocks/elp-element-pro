---
title: elp-cascader-editor 级联编辑器
sidebarDepth: 0
---

## elp-cascader-editor

#### 基本示例

可自定义展示层级

<code-card compName="docs-cascader-editor">
<<< @/docs/.vuepress/components/data-entry/elp-cascader-editor/index.vue
</code-card>

可实现增、删、改, 可自定义元素
> 输入框中的操作需敲【enter】确认

<code-card compName="docs-cascader-editor-edit">
<<< @/docs/.vuepress/components/data-entry/elp-cascader-editor/edit.vue
</code-card>

#### Attributes
参数|说明|类型|可选值|默认值
--|:--|:--|:--|:--
cascade-data|三级目录填充值组成| Array
cascader-level| 展开层级| Number|-|3
list-height| 列表高 | String|-|400px
level-label|各级目录名称|Array|-|[‘一级目录’, ‘二级目录’, ‘三级目录’]
placeholder | 添加输入框显示的占位符 | String | '请输入目录名'
show-search|当前级别是否可以搜索，可传值为数组、"none"或"all"控制让哪几个级别显示|Array/ 'none'/ 'all'|-|'none'
show-edit|当前级别各项是否可以编辑，可传值为数组、"none"或"all"控制让哪几个级别显示|Array/ 'none'/ 'all'|-|'none'
show-delete|当前级别各项是否可以删除，可传值为数组、"none"或"all"控制让哪几个级别显示|Array/ 'none'/ 'all'|-|'none'
show-add|当前级别是否可以添加，可传值为数组、"none"或"all"控制让哪几个级别显示|Array/ 'none'/ 'all'|-|'none'

#### cascadeData Attributes
参数|说明|类型|可选值|默认值
--|:--|:--|:--|:--
label| 标签名 | string |
value| 唯一标识 | string
editable | 是否可编辑，权重最高 | boolean | - | -
deleteable | 是否可删除，权重最高 | boolean | - | -


#### events
事件|说明|返回
--|:--|:--
change|chang时触发|返回当前选中层级[{label:'',value:''},{label:'',value:''}]
edit-add|新增项目后回车触发|当前层级，新增label,当前选中层级
edit-delete|点击删除按钮触发|当前层级,当前值,当前选中层级
edit-enter| 编辑各项后回车后触发|当前层级,编辑label,当前选中层级

#### slot

name | 说明
--|:--
custom| 用于自定义元素
