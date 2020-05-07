---
title: '主题'
sidebarDepth: 0
---

### 变量覆盖
使用 Less 作为开发语言,并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

如果你的项目使用了 webpack 工程，可以通过变量覆盖的方式来实现主题定制。

首先在项目中先建一个目录，比如 my-theme，然后在 my-theme 下建立一个 less 文件 index.less，并写入下面内容：
```
@import '~element-ui-pro/src/styles/index.less';

// Here are the variables to cover, such as:
@color-theme: #8c0776;
```

然后在入口文件 main.js 内导入这个 less 文件即可：
```
import Vue from 'vue';
import ElementUiPro  from 'element-ui-pro'
import '../my-theme/index.less';

Vue.use(ElementUiPro);
```
#### 变量列表

``` less
/* Layout
-------------------------- */
@panel-min-width: 1280px;
@panel-margin: 30px;
/* Font
-------------------------- */
@font-regular: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
@font-weight-bold: 600;
@font-size-lg: 20px;
@font-size: 18px;
@font-size-md: 16px;
@font-size-sm: 14px;
@font-size-xs: 12px;

/* Functional Color */
@color-success: #4BCB21;
@color-warning: #FFC82C;
@color-danger: #FF3232;
@color-info: #A5ADB5;
/* Font Color */
@color-theme: #00C4FF;
@color-text-primary: #121A21; // 主要文字|标题
@color-text-regular: #34495E; // 常规文字
@color-text-secondary: #A5ADB5; // 次要文字|禁用、无效、提示文本
@color-text-placeholder: #D5D9DE; // 占位文字|边框、分割线
@color-text-filter: #676767;// 描述文字|筛选项目名
/* Border Color */
@color-border: #E3E6E8;
/* Background Color */
@color-white: #ffffff;
@color-panel-bg: #EFF1F4;
@color-panel-bg-secondary: #F1F3F5;
@color-box-shadow: rgba(179, 187, 195, 0.50);
```