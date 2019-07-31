npm run build
rm -rf static
mv build/* .
rm -rf build
git add .
git commit -m "Publish a new version"
git push -u origin master