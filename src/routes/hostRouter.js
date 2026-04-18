//core module
const path = require('path');

//external module
const express = require('express');

const hostRouter= express.Router();

hostRouter.get("/host/add-home", (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'addhome.html'));
})

hostRouter.post("/host/add-home",(req,res,next) =>{
    res.sendFile(path.join(__dirname, '../', 'views', 'homeadded.html'));
})

module.exports = hostRouter;