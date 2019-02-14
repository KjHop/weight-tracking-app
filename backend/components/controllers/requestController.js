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
    });
    app.post("/login", (request,response)=>{
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
            console.log(result[0]);
            console.log(result[0].username==request.body.username, result[0].username, request.body.username);
            if(result.length!==0 && result !== undefined){
                if(result[0].username===request.body.username && result[0].password===request.body.password){
                    response.send("Logged in");
                }else{
                    response.send("Wrong username or password");
                }
            }else{
                response.send("Bad username or password");
            }
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
        pool.query("SELECT username FROM users WHERE username='"+request.body.username+"'", (error, result)=>{
            if (error) throw error;
            if(result.length===0 && result !== undefined){
                pool.query(sql, (error, result)=>{
                    console.log("Successfully registered");
                    response.send("Gud gud");
                });
            }else{
                response.send("User exists");
            }
        });
    });
}