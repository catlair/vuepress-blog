---
title: vscode emmet配置及自定义
date: 2019-07-28 15:09:46
categories:
  - vscode
tags:
  - emmet
  - vscode
---

## Emmet 官方文档

<https://docs.emmet.io/customization/>

## vscode 官方文档

<https://code.visualstudio.com/docs/editor/emmet>

## 默认配置文件

并不建议修改此文件,但可以从这更详细的了解 emmet  
`{VSC安装路径}\resources\app\extensions\emmet\node_modules\vscode-emmet-helper\out\expand\expand-full.js`

## 自定义标记不会在建议列表中展开

将此属性设置为 true 可启用使用 Tab 键扩展 Emmet 缩写。当没有可缩放的缩写时，我们使用此设置提供适当的后备以提供缩进。

```json
"emmet.triggerExpansionOnTab": true
```

使用这个还有一个作用是如图所示

![alt](./vscode-emmet配置及自定义/tab1.gif '开启时')  
![alt](./vscode-emmet配置及自定义/tab2.gif '关闭时')

## 自定义 Emmet 代码段使用的变量

```json
"emmet.variables": {
    "lang": "zh-CN",
    "charset": "UTF-16"
}
```

从这里就看得到变量的变化

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-16" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

## 自定义 Emmet 片段

配置`snippets.json`文件的位置

```json
    "emmet.extensionsPath": "C:\\Users\\sea\\AppData\\Roaming\\Code\\User\\"  /*这里写自己放的文件夹(是文件夹,不是文件)*/
```

下面是定义的片段 demo

```json
{
  "html": {
    "snippets": {
      "ull": "ul>li[id=${1} class=${2}]*2{ Will work with html, jade, haml and slim }",
      "oll": "<ol><li id=${1} class=${2}> Will only work in html </ol>",
      "ran": "{ Wrap plain text in curly braces }"
    }
  },
  "css": {
    "snippets": {
      "cb": "color: black",
      "bsd": "border: 1px solid ${1:red}",
      "ls": "list-style: ${1}"
    }
  }
}
```
