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
