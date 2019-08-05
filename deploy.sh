npm run build
rm -rf static
rm -rf precache-manifest*
mv build/* .
rm -rf build
git add .
git commit -m "Publish a new version"
git push -u origin master