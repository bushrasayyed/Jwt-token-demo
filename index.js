const express=require('express')
const cors=require('cors');
const  db  = require('./app/models/index');

const app=express();

var corsPolicy={
    origin:"*"
}

app.use(cors(corsPolicy))
app.use(express.json());
app.use(express.urlencoded({extended:true}))


require("./app/routes/userRoute")(app);
db.sequelize.sync().then(result=>{
console.log(result);
// app.listen(5000);

}).catch(err=>
{
    console.log(err);
}
);

app.listen(5000,()=>{
    console.log("Server Started successfully!!!")
})