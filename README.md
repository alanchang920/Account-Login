# Account-Login

![](https://raw.githubusercontent.com/alanchang920/Account-Login/main/login.png)

## 產品功能
- 使用者在表單裡輸入帳密：email & password。
- 發送表單，比對內建的使用者名單。
- 如果找不到username或是password錯誤，顯示Incorrect username or password.。
- 如果username + password組合正確，顯示Welcome back,使用者名稱.。

## 測試帳號

|     |               Email |         Password |
| --: | ------------------: | ---------------: |
|   1 |      tony@stark.com |       iamironman |
|   2 | captain@hotmail.com | icandothisallday |
|   3 |    peter@parker.com |         enajyram |
|   4 |   natasha@gamil.com |     \*parol#@\$! |
|   5 |     nick@shield.com |         password |

## 環境建置
- Node.js
- npm
- Express
- Express-handlebars
- Nodemon
- Body-Parser

## 專案安裝流程
1. 開啟終端機(Terminal)
```
git clone https://github.com/alanchang920/Account-Login.git
```
2. 進入到存放此專案的資料夾
```
cd login-page
```
3. 安裝 npm 套件
```
npm i
```
4. 安裝 nodemon 套件
```
npm install -g nodemon
```
5. 執行 app.js 檔案
```
npm run dev
```
6. 查看專案
```
打開瀏覽器輸入  http://localhost:3000
```
