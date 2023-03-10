const express = require('express');
const bodyParser = require("body-parser");
const Constants = require('./config/constant');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');


const app = express();


app.use(bodyParser.json());
app.use(loginRouter);
app.use(registerRouter);

app.get('/', (req,res)=>{
    res.send("Home Page")
})


app.listen(Constants.PORT, ()=>{
    console.log(`Server is listening at http://localhost:${Constants.PORT}`)
})