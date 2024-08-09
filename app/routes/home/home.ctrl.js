"use strict";

//mvc 컨트롤러 분리   / 실제 실행되는 부분을 따로 빼서 이곳에 분리


const output = {
    home : (req,res)=>{
        res.render("home/index");
    },
    
    login :(req,res) =>{
        res.render("home/login");
    },
    
}

const users = {
    id : ["woorim", "나개발", "김팀장"],
    password : ["1234","12312","124212"],
}

const process = {
    login : (req, res) =>{
        const id = req.body.id,
        password = req.body.password;
        
        if(users.id.includes(id)){
         const idx = users.id.indexOf(id);
         if(users.password[idx] === password){
            return res.json({
                success : true,
            });
         }   
        }

        return res.json({
            success : false,
            msg : "로그인에 실패하였습니다.",
        })
    }
}

module.exports = {
    output,
    process,
};