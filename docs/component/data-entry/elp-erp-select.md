---
title: elp-erp-select erp选择
sidebarDepth: 0
---

## elp-erp-select

#### 单选

<code-card compName="docs-erp-select">
<<< @/docs/.vuepress/components/data-entry/elp-erp-select/index.vue
</code-card>

#### 多选

<code-card compName="docs-erp-select-mutiple">
<<< @/docs/.vuepress/components/data-entry/elp-erp-select/mutiple.vue
</code-card>

+ 请求使用 axios 封装，使用前需预先安装 axios
+ request-params 可全局注册

``` js
  Vue.use(ElementUiPro, {
    elpErpSelect: {
      requestParams: {
        url: '/unilabel/common/query/allUser',
        params: 'account',
        label: 'label',
        value: 'value'
      }
    }
  })
```

#### Attributes
参数|说明|类型|可选值|默认值
--|:--|:--|:--|:--
value|erp值|string
request-params|请求明细|object|-|-
size|尺寸大小|string|medium/small/mini
multiple|是否多选|boolean|-|false
disabled|是否禁用|boolean|-|false
placeholder|占位|string
label-in-value| 在返回选项时，是否将 label 和 value 一并返回，默认只返回 value

#### request-params
参数|说明|类型|可选值|默认值
--|:--|:--|:--|:--
url|请求url|string|-|-
params|请求参数|string|-|-
label|请求回值 标签名对应字段|
value|请求回值 标签值对应字段|

#### events
事件|说明|返回
--|:--|:--
change|chang时触发
