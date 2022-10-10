# 参考链接 https://blog.csdn.net/xiaowuwjw/article/details/124533574
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd .vuepress/public

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy 提交'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:T-1760/front-blog.git main:site

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -