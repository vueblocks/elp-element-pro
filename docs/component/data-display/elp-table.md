---
title: elp-table  表格
sidebarDepth: 0
---
## elp-table

#### 基本使用
默认提供无数据样式, 并可选择 border 为dotted
> empty-txt 通过v-html 绑定，故除字符串外可拓展 html

<code-card compName="docs-table">
<<< @/docs/.vuepress/components/data-display/elp-table/index.vue
</code-card>

#### 行内编辑
使用inline-edit 并配合 columns 的 edit 字段可实现行内编辑

<code-card compName="docs-table-edit">
<<< @/docs/.vuepress/components/data-display/elp-table/edit.vue
</code-card>

#### 属性拓展
除了下面定义的属性方法, 还支持el-table 的所有属性和方法,下面以单选为例

<code-card compName="docs-table-expand">
<<< @/docs/.vuepress/components/data-display/elp-table/expand.vue
</code-card>

#### 插件 - 操作栏拓展

**list**  若需要函数计算可传入函数，也可直接传入数组

<code-card compName="docs-table-operate">
<<< @/docs/.vuepress/components/data-display/elp-table/operate.vue
</code-card>

也可直接定义为图标,事件可直接通过传参输入

<code-card compName="docs-table-icon">
<<< @/docs/.vuepress/components/data-display/elp-table/icon.vue
</code-card>


#### Attributes
参数|说明|类型|可选值|默认值|
:--|:--|:--|:--|:--|:--
value|当前页数|number|1
columns|注入el-table-column|array{}|-|-
page|分页信息|object|-|-|
empty-txt|数据为空的提示文案|string|'暂无数据'
dotted-line|表格border是否采用dotted|boolean|-|false
cell-class-name|表格cell类名|string|表格样式基于table-cell书写
inline-edit|开启行内编辑|boolean|-|false
size|表格大小|string|medium,small,mini|small
border|是否有边框|boolean|-|false


#### columns
参数|说明|类型|可选值|默认值|
:--|:--|:--|:--|:--|:--
hidden|隐藏该列|boolean
prop|字段名|string
label|显示标题|string
width|列宽度|string
minWidth| 列最小宽度 | string
fixed|列是否固定在左侧或者右侧，true 表示固定在左侧|string,boolean|true, left, right
sortable|对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件|boolean,string|true,false,'custom'
tooltip|当内容过长被隐藏时显示 tooltip|boolean
align|对齐方式|string|left/center/right
edit|行内编辑|boolean|-|false|
format|自定义表格内容|Function(row)|
resizable|是否可拖拽|boolean|-|true
plugin| 可自定义使用的插件，现在已默认安装几种插件|obj

### plugin 说明
参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--|:--
type|插件类型|string| operate
attrs| 插件属性 | object

### operate 插件 attrs
参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--|:--
label|操作栏名称|string|
icon | 操作栏图标
hide| 隐藏 | boolean / function
eventName| 触发点击时 emit出的函数名称

#### page
参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--|:--
show|是否展示分页|boolean
total|总条数|number
layout|组件布局|string|sizes, prev, pager, next, jumper, ->, total, slot
pageSize|每页显示条目|number
pageSizes|每页显示个数选择器的选项设置|number[]|[10, 20, 30, 40, 50, 100]
pageCount|页码按钮的数量，当总页数超过该值时会折叠|numer|大于等于 5 且小于等于 21 的奇数|7

#### Events (支持v-table事件)
事件名称|说明|回调参数
:--|:--|:--
sizeChange|pageSize 改变时会触发|每页条数
handleEvent| 插件触发事件的输出



### ref
名称|说明|
:--|:--|
elpTable|获取el-table 的实例

