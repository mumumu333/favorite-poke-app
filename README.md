# Favorite Pokemon App
ポケモンの一覧からお気に入り登録ができるWebアプリです。  
ログイン、詳細表示やメモ機能も搭載しています。

## ✨ 主な機能
- 🔒 ログイン  
最初に表示されるページ。ID: `1` / PASS: `1` でログイン可能です。
![image](https://github.com/user-attachments/assets/94816ca5-41bc-4ffb-a29f-e6be1c30b402)

- 📋 ポケモン一覧表示  
ログイン後に表示されるページ。ポケモンの名前と画像が500体分表示されます。
![image](https://github.com/user-attachments/assets/adf4a0e8-c66c-4f5a-ba89-0bcfdd2fb56e)

- 💬 モーダルで詳細表示（わざ・身長・体重など）
![image](https://github.com/user-attachments/assets/2eac6aa5-cca4-42e1-870e-523d97965f44)

- 📝 メモ登録  
モーダル下部のテキストエリアにてメモ登録ができます。テキストエリア以外の場所をクリックすると登録完了します。
再読み込み時にもデータが保持されます。  
![image](https://github.com/user-attachments/assets/18eb0879-898a-4842-b0b3-5cc93d146f53)

- 💖 お気に入り登録  
♡ボタンクリックで登録。  
再読み込み時にもデータが保持されます。  
![image](https://github.com/user-attachments/assets/7dfb243f-3e76-436a-a84d-d88c435a00e9)  
ハンバーガーメニュー→お気に入りより登録したリストを確認できます。  
![image](https://github.com/user-attachments/assets/0301fcf8-2877-4c61-8ebf-e8e01ade41d3)

- 🍔 ハンバーガーメニューからページ遷移  
![image](https://github.com/user-attachments/assets/69c3ebbb-fb10-4194-8dea-d69d57051e40)

## 🛠 技術スタック
- React
- React Router v6+
- Chakra UI
- Axios（PokeAPIを利用）
- Framer Motion（アニメーション）

## 🧪 起動方法
npm install
npm start
