

set -e


yarn docs:build

cd docs/.vitepress/dist



git init 

git add -A

git commit -m "github 自动化部署"

git push -f git@github.com:GW0420/sun-docs.git master:gh-pages

cd -

rm -rf docs/.vitepress/dist

