"use strict";

//mvc 컨트롤러 분리   / 실제 실행되는 부분을 따로 빼서 이곳에 분리

const home = (req,res)=>{
    res.render("home/index.ejs");
};

const login = (req,res) =>{
    res.render("home/login.ejs");
};

module.exports = {
    home,
    login
};