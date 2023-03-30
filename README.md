# 短網址產生器

## 介紹
將任意一個網址改為短網址

### 功能
1. 輸入網址後產生短網址
2. 可透過 Copy 按鈕複製產生後的短網址

## 環境建置
1. Node.js
2. Express 4.17.1
3. Express-Handlebars 5.3.4
4. mongoose 6.0.7

## Installing - 專案安裝
1. 將專案放到你的電腦，用終端機進入資料夾
2. 安裝 npm 套件
```
npm install
```

3. 設定環境變數，新建一個 .env 檔案，使用你的 MongoDB ，設定 MONGODB_URL 環境變數
```
MONGODB_URL=mongodb+srv://<username>:<password>@<cluster>.pk4dwnp.mongodb.net/?retryWrites=true&w=majority
```

4. 啟動伺服器
```
npm run dev 
```

5. 當 terminal 出現以下字樣，表示伺服器已啟動並成功連結
```
App is running in http://localhost:3000
```
6. 打開瀏覽器輸入 http://localhost:3000 進入網頁

7. 輸入網址按下 "Shorter" 按鈕既可產生短網址

8. 使用 Ctrl + c 結束