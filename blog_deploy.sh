#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

outputPath=./blog/.vuepress/dist/
setGitGlobalConfig() {
  git config --global user.name "catlair"
  git config --global user.email "catlair@qq.com"
}

if [ -f "${outputPath}index.html" ];then
  echo "index.html文件存在"
  if [ $1 == "-f" ]; then
    echo "还是得打包"
    yarn build
  fi
else
  echo "index.html文件不存在"
  # 生成静态文件
  yarn build
fi

# 进入生成的文件夹
cd ${outputPath}

# deploy to coding
# echo 'yinx.xyz' > CNAME  # 自定义域名
# if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
#   msg='local deploy'
#   codingUrl=git@e.coding.net:catlair/web/vuepress-page.git
# else
#   msg='来自github actions的自动部署'
#   codingUrl=https://${CODING_TOKEN}@e.coding.net/catlair/web/vuepress-page.git
#   setGitGlobalConfig
# fi
# git init
# git add -A
# git commit -m "${msg}"
# git push -f $codingUrl master # 推送到coding

# deploy to github
# echo 'yinx.xyz' > CNAME  # 自定义域名
# rm -f CNAME # 没有自定义域名
if [ -z "$CATLAIR_GITHUB_TOKEN" ]; then
  msg='local deploy'
  githubUrl=git@github.com:catlair/catlair.github.io.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://${CATLAIR_GITHUB_TOKEN}@github.com/catlair/catlair.github.io.git
  setGitGlobalConfig
fi
# git add CNAME
git init
git add -A -f
git commit -m "${msg}"
git push -f $githubUrl master

cd - # 退回开始所在目录
rm -rf ${outputPath}
