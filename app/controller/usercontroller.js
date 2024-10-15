const db =require("../models")
const authConfig=require("../config/authconfig");
const User=db.user;
let jwt=require("jsonwebtoken");
exports.signup=(req,res)=>
{
    const{username,password,email}=req.body;
    if(!username||!password||!email)
    {
        res.status(400).send({message:"Request body is invalid"})
    }
    else
    {
        User.findOne({username:username}).then(user=>
        {
            if(user)
            {
                res.status(400).send({message:"User already exist"})

            }
            
        }

        )
        User.create({username:username,password:password,email:email}).then(user=>{
            if(user)
                {
                    res.status(200).send({message:" Successfully registered!!"})
    
                }
                else
                {
                    res.status(500).send({message:"Signup failed"})

                }
        })
    }

    }

exports.login=(req,res)=>
{
const {username,password}=req.body;
User.findOne({username:username,password:password}).then(user=>{
    if(user)
   {
const token=jwt.sign({id:user.username},authConfig.secret,{
    algorithm:"HS256",
    expiresIn:86400
});
res.status(200).send({message:"SUCCESSFULLY LOGGED-IN",token:token});
   }
   else{
    res.status(401).send({message:"Invalid credentials",token:null});
   }
})
}

