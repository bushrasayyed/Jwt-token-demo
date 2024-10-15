const dbconfig=require("../config/dbconfig");
const Sequelize=require("sequelize");
const sequelize=new Sequelize(dbconfig.DB,dbconfig.USER,dbconfig.PASSWORD,{
    host:dbconfig.HOST,
    dialect:dbconfig.dialect,
    pool:{
        max:dbconfig.pool.max,
        max:dbconfig.pool.min,
        max:dbconfig.pool.idle,
        max:dbconfig.pool.acquire,

    }

});

const db={};
db.Sequelize=Sequelize;   //package
db.sequelize=sequelize;
db.user=require("./user")(sequelize,Sequelize)

module.exports=db;

