#!/usr/bin/bash

gitpath="/.vuepress/dist"

cd ./blog/.vuepress/dist/
git init
git add .
git commit -m "up"
git remote add origin git@e.coding.net:catlair/web/vuepress-page.git
git push -f -u origin master
echo "推送完成"

echo "判断是否删除.git"
result=$(echo $(pwd) | grep "${gitpath}")
if [ "$result" != "" ]
then
  echo "  需要删除.git文件"
  rm -rf .git
  echo "  删除成功"
else
  echo "  未知路径,俺不敢删除.git"
fi
