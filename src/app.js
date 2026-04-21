//core module
const path = require('path');

//external module
const express = require('express');

//Local Module
const userRouter = require("./routes/userRouter.js");
const hostRouter = require("./routes/hostRouter.js");

const app = express();

app.use((req,res,next) =>{
    console.log(req.url, req.method);
    next();
})

app.use(express.urlencoded());

app.use(userRouter);

app.use(hostRouter);

app.use(express.static(path.join(__dirname, './', 'public')))

app.use((req, res, next) => {
    res.status(404).send("<h1> 404 YOUR PAGE IS NOT FOUND ON AIRBNB</h1>")
});

const PORT = 3001;
app.listen(PORT, () =>{
    console.log(`Server running on address http://localhost:${PORT}`);
});