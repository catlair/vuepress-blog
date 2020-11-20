---
title: markdown中使用emmet的配置
date: 2020-11-01 22:14:06
editLink: true
categories:
  - vscode
tags:
  - vscode
  - markdown
---

## 方法

::: tip
`emmet.includeLanguages`
在默认不受支持的语言中启用 Emmet 缩写。在此语言和 emmet 支持的语言之间添加映射。 例如: `{"vue-html": "html", "javascript": "javascriptreact"}`
:::

于是添加一个映射

```json
  "emmet.includeLanguages": {
    "markdown": "html"
  },
```

> 但是这样并不会生效

## 解决

`markdown`文件默认被 emmet 排除掉的,需要清除排除

```json
  "emmet.excludeLanguages": [],
  "emmet.includeLanguages": {
    "markdown": "html"
  },
```
