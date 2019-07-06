## markdown转html的webpack loader

需要在项目中安装html-loader
```
npm install html-loader -D
```
安装md-to-html-loader
```
npm install md-to-html-loader
```

### 配置webpack.config.js
```
...
module: {
        rules: [
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: 'md-to-html-loader'
                        options: {
                            /* your options here */
                        }
                    }
                ]
            },
        ]
    }
```

### npm 地址
[md-to-html-loader](https://www.npmjs.com/package/md-to-html-loader)