
//모듈
const express = require("express");
const app = express();
const PORT = 3000;
const home = require("./routes/home") //라우팅
const path = require('path');

app.set("views", "./views"); //앱 셋팅 app.set
// 화면 views 를 관리해줄 파일이 저장될 폴더 이름을 두번째 파라미터로 넘긴다 ex) "./views"
app.set("view engine", "ejs");
// html 코드들을 어떤 엔진으로 해석해줄지 정한다 ex) ejs엔진 
app.use(express.static(`${__dirname}/public`))

app.use("/", home); // use => 미들웨어를 등록해주는 메서드.

module.exports = app;
