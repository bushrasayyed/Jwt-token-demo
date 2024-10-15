const config=require("../config/authconfig")
const jwt=require("jsonwebtoken");
verifytoken=(req,res,next)=>
{
let token=req.headers['Authorization'];
token=token.split(" ")[1];
jwt.verify(token,config.secret,(err,decoded)=>
{
    if(decoded.id)
    {
        next();   //proceed further 

    }
    else{
        return res.status(401).send({message:"Token invalid!!! LOGIN AGAIN"})
    }
})

};
module.exports=verifytoken;