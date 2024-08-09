"user strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");


router.get('/', ctrl.output.home); //ctrl 변수로 ctrl에 접근하여 home 객체에 접근


// 라우팅 기능.
// 브라우저에서 '/' 이 경로로 요청이 들어오면 이러한 동작을 하겠다.
// 요청은 인자 req 와 응답 res
// 하드코딩된 html을 views/home 폴더로 모아 놔두고 ejs 모듈을 npm으로 받은뒤 렌더링한다
// routes/home/index.js에 라우팅 분리 
//브라우저에서 "/login" 이라는 경로로 요청하면 "여기는 로그인 화면 입니다" 라는 응답을 하겠다.
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);


module.exports = router; 