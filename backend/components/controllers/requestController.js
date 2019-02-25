const express = require("express");
const mysql = require("mysql");

module.exports = app =>{
    app.get("/",(request,response)=>{
        const pool = mysql.createPool({
            connectionLimit: 10,
            host:"localhost",
            user:"test",
            password:"testtest1",
            database:'light_weight'
        });
        pool.query("SELECT * FROM users", (error, result)=>{
            console.log(result);
        });
        pool.end();
    });
    app.post("/login", (request,response)=>{
        console.log(request.body);
        const pool = mysql.createPool({
            connectionLimit: 10,
            host:"localhost",
            user:"test",
            password:"testtest1",
            database:'light_weight'
        });
        const sql = "SELECT username, password FROM users WHERE username='"+request.body.username+"' and password='"+request.body.password+"'";
        pool.query(sql, (error, result)=>{
            if (error) throw error;
            if(result !== undefined && result.length!==0 ){
                if(result[0].username===request.body.username && result[0].password===request.body.password){
                    response.send("Logged in");
                }else{
                    response.send("Wrong username or password");
                }
            }else{
                response.send("Bad username or password");
            }
            pool.end();
        });
    });
    app.post("/register", (request, response)=>{
        const pool = mysql.createPool({
            connectionLimit: 10,
            host:"localhost",
            user:"test",
            password:"testtest1",
            database:'light_weight'
        });
        const sql = "INSERT INTO users(username, password, email) VALUES('"+request.body.username+"','"+request.body.password+"','"+request.body.email+"')";
        //Check if user exists
        let userExists = false;
        pool.query("SELECT username FROM users WHERE username='"+request.body.username+"'", (error, result)=>{
            if(result !== undefined && result.length !==0){
                userExists = true;
            }else{
                userExists = false;
            }
            if(userExists===false){
                pool.query(sql, (error, result)=>{
                    if (error) throw error;
                    response.send("Git");
                });
            }else{
                response.send("Nie git");
            }
        });
    });
}