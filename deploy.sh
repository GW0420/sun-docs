

set -e


yarn docs:build

cd docs/.vitepress/dist



git init 

git add -A

git commit -m "gitee 自动化部署"

git push -f git@gitee.com:li-li-liming/docs.git master:gh-pages

cd -

rm -rf docs/.vitepress/dist

