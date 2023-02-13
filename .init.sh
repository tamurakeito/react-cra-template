echo '\x1b[36mプロジェクト名を入力しEnterキーを押してください\x1b[0m'
read -p '> ' title
rm -r ./.init.sh
yes | rm -r ./.git
echo '...gitをリセットしました...'
# packageにある名前を一括で変更する記述
sed -i '' s/react-ts-template/${title}/ package*
mv ../react-ts-template ../${title}
echo '...プロジェクト名を設定しました...'
