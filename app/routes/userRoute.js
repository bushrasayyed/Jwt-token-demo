module.exports=app=>{
    const user=require('../controller/usercontroller')

    const route=require('express').Router();

    route.post("/signup",user.signup);
    route.post("/login",user.login);   
    

    app.use('/api',route)
   
}