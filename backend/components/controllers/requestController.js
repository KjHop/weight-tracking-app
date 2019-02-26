const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");

const saltRounds = 10;

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
        const pool = mysql.createPool({
            connectionLimit: 10,
            host:"localhost",
            user:"test",
            password:"testtest1",
            database:'light_weight'
        });
        const sql = "SELECT username, password FROM users WHERE username='"+request.body.username+"'";
        pool.query(sql, (error, result)=>{
            if (error) throw error;
            if(result !== undefined && result.length!==0 ){
                if(result[0].username===request.body.username){
                    bcrypt.compare(request.body.password, result[0].password, (error, result)=>{
                        if(result===true){
                            response.cookie('logged as', request.body.username, { maxAge: 999999, HttpOnly: false }).send("Logged in");
                        }else{
                            response.send("Wrong username or password");
                        }
                    });
                }else{
                    response.send("Wrong username or password");
                }
            }else{
                response.send("Wrong username or password");
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
        //Check if user exists
        let userExists = false;
        pool.query("SELECT username FROM users WHERE username='"+request.body.username+"'", (error, result)=>{
            if(result !== undefined && result.length !==0){
                userExists = true;
            }else{
                userExists = false;
            }
            if(userExists===false){
                bcrypt.hash(request.body.password, saltRounds).then(function(hash) {
                    const sql = "INSERT INTO users(username, password, email) VALUES('"+request.body.username+"','"+hash+"','"+request.body.email+"')";
                    pool.query(sql, (error, result)=>{
                        if (error) throw error;
                        response.send("Git");
                    });
                }).catch(err=>{
                    console.log(err);
                });
            }else{
                response.send("Nie git");
            }
        });
    });
}