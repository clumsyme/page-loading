# page-loading

## 用法

```bash
npm install
npm start
```

打开浏览器[`http://localhost:8888`](http://localhost:8888)

打开浏览器开发者工具，修改`/src/index.html`文件内引入的`<link>`与`<script>`标签，查看`Network`与`Performance`标签页查看结果。

## 关于文件加载

`/src/static/`文件件以`delay-n.js`或`delay-n.css`命名的文件，将会延迟`n * 100ms`返回，用于查看不同加载速度对页面的影响。