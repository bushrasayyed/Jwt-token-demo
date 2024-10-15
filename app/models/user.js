module.exports=(sequelize,Sequelize)=>
{
        const User=sequelize.define("tbl_user",
            {
                username:{
                    type:Sequelize.STRING
                },
                password:{
                    type:Sequelize.STRING
                },
                email:{
                    type:Sequelize.STRING
                }
            })
            return User;

};