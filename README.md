# sjcvue

> A Vue.js project

#项目结构

|-- build                            	// 项目构建相关代码
|-- config                           	// 项目开发环境配置
|-- dist                          		// 项目打包文件夹
|-- node_modules                    	// 项目依赖资源包安装路径
|-- src                               // 源码目录
|   |-- components                   //  vue自定义组件文件夹
|   		|--broad						// 应急广播页面组件
|   		|--iot						// 物联网页面组件
|   		|--main						// 公共组件
|   		|--village						// 村务页面组件
|	|--filters							// 过滤器
|	|-- page							// vue页面目录
|		|-- broad						// 应急广播页面
|		|-- index						// 项目入口页面
|		|-- iot						// 物联网页面
|		|-- village						// 村务页面
|	|-- router							// 路由配置
|	|-- static							// 静态文件目录
|		|-- img						// 静态图片目录
|		|-- json						// json文件目录
|   |-- store                        	//  vuex的状态管理
|   |--styles							// 页面样式文件目录
|   |--util							//  vue工具目录
|   |-- App.vue                      	// 页面入口文件
|   |-- main.js                      	// 程序入口文件，加载各种公共组件
|-- .babelrc                         	//  ES6语法编译配置
|-- .editorconfig                   		// 定义代码格式
|-- .gitignore                       	//  git上传需要忽略的文件格式
|--。postcssrc.js						// 配置浏览器私缀
|-- index.html                       	// 入口页面
|-- package.json                     	// 项目资源包配置相关信息
|-- README.md                       // 项目说明

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
