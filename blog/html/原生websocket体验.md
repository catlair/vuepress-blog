---
title: 原生websocket体验
date: 2020-11-11 12:16:18
categories:
  - HTML5
tags:
  - WebSocket
---

## 什么是 websocket

[MDN WebSocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)

[阮一峰的网络日志](http://www.ruanyifeng.com/blog/2017/05/websocket.html)

WebSocket 协议在 2008 年诞生，2011 年成为国际标准。所有浏览器都已经支持了。

它的最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。

![alt](./原生websocket体验/bg2017051502.png '阮一峰的图片')

其他特点包括：

（1）建立在 TCP 协议之上，服务器端的实现比较容易。

（2）与 HTTP 协议有着良好的兼容性。默认端口也是 80 和 443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。

（3）数据格式比较轻量，性能开销小，通信高效。

（4）可以发送文本，也可以发送二进制数据。

（5）没有同源限制，客户端可以与任意服务器通信。

（6）协议标识符是 ws（如果加密，则为 wss），服务器网址就是 URL。

## 客户端

下面是最简单的客户端代码,除了使用`on...`属性,也可以使用`ws.addEventListener`方法监听事件

```javascript
const ws = new WebSocket('ws://localhost:3000');

ws.onopen = function(event) {
  // Web Socket 已连接上，使用 send() 方法发送数据
  console.log('连接成功', event);
};

ws.onclose = function(event) {
  console.log('关闭成功', event);
};

ws.onerror = function(event) {
  console.log('出现错误', event);
};

ws.onmessage = function(event) {
  console.log('收到来自服务端的消息 ' + event.data);
  // 处理数据
};

// ws.send('这是一个消息')
```

## 服务端

服务端需要安装`websocket`才能够使用

```javascript
const http = require('http');
const WebSocketServer = require('websocket').server;

const server = http.createServer();

const wsServer = new WebSocketServer({
  httpServer: server,
});

wsServer.on('request', (request) => {
  //没有协议填null
  const connection = request.accept(null, request.origin);

  console.log(new Date() + ' 已连接...');

  setTimeout(() => {
    connection.sendUTF(new Date() + 'hello client !!!');
  }, 2000);

  connection.on('message', (message) => {
    //判断传来的数据类型
    if (message.type === 'utf8') {
      console.log('收到消息: ' + message.utf8Data);
      //发送给客户端
      connection.sendUTF(message.utf8Data);
    } else if (message.type === 'binary') {
      console.log('收到二进制消息 ' + message.binaryData.length + ' bytes');

      //发送给客户端
      //只会给当前客户端发,不会给所有的客户端发
      connection.sendBytes(message.binaryData);
    }
  });

  connection.on('close', (_reasonCode, _description) => {
    console.log(
      new Date() + ' 同行的 ' + connection.remoteAddress + ' 断开连接.'
    );
  });
});

server.listen(3000, () => {
  console.log(new Date() + ' 服务器运行在 3000 端口');
});
```

::: tip
如果想要结果推送给每一个客户端,可以使用数组保存客户端
:::

```javascript
const user = [];

//...

//有了客户端连接
user.push(connection);

//...

//发送所有消息
user.forEach((con) => {
  con.sendBytes(message.binaryData);
});
```
