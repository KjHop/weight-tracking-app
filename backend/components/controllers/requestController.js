const express = require("express");
const mysql = require("mysql");

module.exports = app =>{
    app.get("/",(request,response)=>{
        response.send("Gitara");
    });
    app.post("/login", (request,response)=>{
        const pool = mysql.createPool({
            connectionLimit: 10,
            host:"localhost",
            user:"test",
            password:"testtest1",
            database:'light_weight'
        });
        const sql = "SELECT username, password FROM users";
        pool.query(sql, (error, result)=>{
            if (error) throw error;
            response.send(result);
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
        pool.query(sql, (error, result)=>{
            if (error) throw error;
            console.log("Successfully registered");
            response.send("Gud gud");
        });
    });
}