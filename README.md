# 项目文件说明
-   —| build               => 生产打包的文件目录
-   —| config              => 文件是 webpack 配置
-   —| —| constant         => 常量配置
-   —| —| —| development   => 开发环境配置
-   —| —| —| production    => 生产环境配置
-   —| —| webpackUtils     => webpack工具函数
-   —| —| —| getCssLoader  => 配置cssloaders
-   —| —| —| getMultiPage  => 多页入口和template插件配置
-   —| —| —| setupProxy    => http-proxy-middleware代理配置
-   —| —| webpack.common   => webpack本地和生产公共配置(比如alias)
-   —| —| webpack.dev      => webpack本地配置
-   —| —| webpack.dll      => webpack dll打包,提升二次启动效率
-   —| —| webpack.prod     => webpack生产配置
-   —| dist                => 本地开发的打包文件目录
-   —| pubilc              => 资源文件
-   —| —| asset            => template模板需要的文件(注意打包后和template在同意目录下，引入js用./就可以)
-   —| —| —| favicon       => 图标
-   —| —| —| lib-flexible  => 淘宝的lib-flexible,做了一点兼容处理
-   —| —| —| vconsole.min  => 手机端调试用的
-   —| —| template         => 页面模板  
-   —| src                 => 项目开发源代码
-   —| —| pages            => 项目页面入口
-   —| —| —| components    => 页面公用组件
-   —| —| —| dva           => 数据管理
-   —| .babelrc            => babel配置文件
-   —| .editorconfig       => 各个编辑器统一代码风格
-   —| .gitignore          => git提交忽略文件
-   —| .npmrc              => npm源
-   —| .prettierrc         => prettier代码格式化配置文件
-   —| alias               => webpack别名配置
-   —| build.sh            => 生产打包脚本
-   —| jsconfig            => 别名指引文件配置
-   —| package             => 项目依赖等配置
-   —| README              => 项目文档


##  启动
-   node 版本 v12.18.4
-   npm i
-   npm run devdll(首次启动需要运行,其他运行不需要)
-   npm start


##  项目技术栈
-  打包使用webpack
-  ui使用react框架
-  数据管理使用dva
-  css使用cssmodule，支持less
