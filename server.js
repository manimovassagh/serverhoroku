'use strict';
const express = require('express');
const fs = require('fs')
const app = express();

//Define routers-------------------------

app.get('/',(req,res)=>{
    fs.readFile('test.json',(err,data)=>{
        if(err) throw err;
        else {
            res.send(data.toString())
        }
    })

})
app.get('/greeting', (req, res) => {
    res.send({ hi: 'just check' })
})
app.get('/login', (req, res) => {
    res.send({ userLogin: 'tried to login' })
})
app.get('/logout', (req, res) => {
    res.send({ userLogout: 'tried to logout' })
})
app.get('/signup', (req, res) => {
    res.send({ userSignup: 'Signup from this place' })
})

// Define Ports and heroku settings--------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT,(err)=>console.log( err || 'Server Working Smooth!'));
