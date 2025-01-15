echo '\x1b[36mプロジェクト名を入力しEnterキーを押してください\x1b[0m'
read -p '> ' title

rm -r ./.init.sh
echo '#' ${title} > ./README.md
echo '...init操作関連ファイルをクリアしました...'

yes | rm -r ./.git
echo '...gitをリセットしました...'

# packageにある名前を一括で変更する記述
find . -type f -exec sed -i '' "s/react-cra-template/${title}/g" {} +
cd ../
mv react-cra-template ${title}
echo '...プロジェクト名を設定しました...'

cd ${title}/src
git clone git@github.com:tamurakeito/react-atomic-ui.git
yes | rm -r ui
mv react-atomic-ui ui