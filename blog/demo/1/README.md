# 测试功能

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::



```html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```



## 测试插值语法

1 + 1 = {{ 1 + 1 }}

<span v-for="i in 3">{{ i }} </span>



<style lang="scss">
    .css-test{
        font-size: 20px;
        color:blue;
        span{
            color:red;
        }
    }
</style>

<div class="css-test">
    1231
    <span>红色的</span>
</div>
<span>没有添加scss的</span>
