const bcrypt = require('bcrypt')


const userRegister = (req,res)=>{
    console.log('User Registration');
    const userDetails = req.body

    const password = userDetails.password
    const saltRounds = 10
    bcrypt.genSalt(saltRounds, (err,salt)=>{
        if(err){
            console.log(err);
        }
        else{
            bcrypt.hash(password, salt, (err,hashedPassword)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log("User has registered successfully ")
                    res.send({"hashedPassword":hashedPassword})
                }
            })
        }
    })
}


module.exports = {userRegister}