## 使用

### 安装依赖

```bash
yarn install
```

### 打包

```bash
yarn  build
```

### 推送到 git

路径修改 `blog.sh`

```bash
yarn  push
```

## 1.0

### 使用固定的版本避免中文路径错误

```javascript
"vue-router": "3.3.4"
"vuepress": "1.5.1",
```

### patches 修改部分包的实现

`markdown-it-disable-url-encode+1.0.1.patch` update: 增加了图片的`title`支持

`vuepress-plugin-smooth-scroll+0.0.9.patch` fix: 编码后的路径导致刷新出错的问题

## 1.1

### 使用 cdn

`vue@2.6.12`和`vue-router@3.3.4` 在生产模式下将使用以下 cdn 代替

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.runtime.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-router@3.3.4/dist/vue-router.min.js"></script>
```

### 去除 reco 主题评论功能

在没使用评论功能时,`reco`默认也会加载评论相关并打包

`.vuepress/config.js`中禁用插件`['@vuepress-reco/comments', false]`

主题在禁用评论插件后也会试图加载相关组件。`.vuepress/components/`在组件库添加空的`AccessNumber.vue`和`Comments.vue`组件,而不是在主题中更改,方便需要开启评论功能时恢复设置。
