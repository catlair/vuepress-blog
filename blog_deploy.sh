#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd ./blog/.vuepress/dist/

# deploy to coding
# echo 'xxx.xxx' > CNAME  # 自定义域名
if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  msg='local deploy'
  codingUrl=git@e.coding.net:catlair/web/vuepress-page.git
else
  msg='来自github actions的自动部署'
  codingUrl=https://${CODING_TOKEN}@e.coding.net/catlair/web/vuepress-page.git
  git config --global user.name "catlair"
  git config --global user.email "catlair@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $codingUrl master # 推送到coding

cd - # 退回开始所在目录
rm -rf ./blog/.vuepress/dist/