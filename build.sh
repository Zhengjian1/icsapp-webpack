#! /bin/bash

echo STEP-1: 安装依赖模块...
mkdir -p ~/.gitlab-ci-org/npm/node_modules
ln -s ~/.gitlab-ci-org/npm/node_modules
npm install --save
echo STEP-1: 编译，生成 js 文件
cross-env NODE_ENV=production webpack --config ./config/webpack.prod.js
echo STEP-2: 导出代码到指定目录
echo '{"version":"'$(date +%Y%m%d%H%M%S)'","codeVersion":"'$(git describe --always --tags)'","commit":"'$(git log --oneline -1 | cut -c1-7)'"}' >config.txt
mv build 50000000
cp -R config.txt 50000000
