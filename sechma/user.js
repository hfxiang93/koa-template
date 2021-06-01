const { DataTypes } = require('sequelize');
module.exports = {
    roleId:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    userName:{
        type:DataTypes.STRING,
        allowNull: false
    },
    password:{
        type:DataTypes.STRING,
        // allowNull: false
    },
    realName:{
        type:DataTypes.STRING,
        // allowNull: false
    },
    tel:{
        type:DataTypes.STRING,
        // allowNull: false
    },
    email:{
        type:DataTypes.STRING,
        // allowNull: false
    },
    remark:{
        type:DataTypes.STRING,
        // allowNull: false
    },
    isDelete:{
        type:DataTypes.BOOLEAN,
        // allowNull: false,
        defaultValue: false
    },
}
