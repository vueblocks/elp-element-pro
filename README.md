# vueblock-ele-ui


## 文档

文档采用 vuepress 书写，需

```
npm install -g vuepress
```
### 启动文档服务
```
npm run docs:dev
```
### 打包文档
```
npm run docs:build
```

## lib库打包
```
npm run build
```

## 项目结构
|-- VUEBLOCK-ELE-UI
    |--app
    |--dist (打包文档)
    |--lib (组件库打包地址)
    |-- docs (vuepress文档)
    |   |-- .vuepress
    |   |   | -- components(组件示例)
    |   |-- component (组件文档)
    |   |-- guide(设计规范文档)
    |-- src (项目库)
        |-- styles (样式/主题)
        |-- packages(组件)
