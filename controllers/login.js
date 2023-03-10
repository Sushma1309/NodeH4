const jwt = require('jsonwebtoken')
const Constants = require("../config/constant")

const userLogin = (req,res) =>{
    console.log("User Login")
    const loginData = req.body
    if(loginData.username && loginData.password){
        console.log("Received  data :", loginData);
        const jwttoken = jwt.sign(loginData, Constants.SECRET_KEY)
        return res.status(200).send({"Token" : jwttoken})
    }
    else{
        return res.status(400).send({message:"Invalid credentials"});
    }
}

module.exports = {userLogin}