const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('power', 'admin', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});
async function test(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
test()
module.exports = {
    sequelize,
    DataTypes,
    Model
}
