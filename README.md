# webpack_compile_ts_to_js

> git clone https://github.com/kalen992/webpack_compile.git

> npm install

|- webpack.config.js

> webpack.config.js
```js
入口设置 => 多文件,需编译文件添加
entry: {
    index: './src/index.js',
    style: './src/less/style.less',
    ts: './src/ts/index.ts',
    es: './src/js/index.js'
  },
```

```js
出口设置 => 
output: {
    //输出路径,必须是绝对路径 /build/
    path: path.resolve(__dirname, "./build"),
    //输出文件的名称
    // filename: "[name].[hash:8].bundle.js"
    filename: "[name].bundle.js"
  },
```

|- .browserslistrc
```txt
样式兼容性配置文件
```

|- tsconfig.json
```txt
typescript 编译配置文件
```
