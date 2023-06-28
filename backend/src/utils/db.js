const {Sequelize}=require('sequelize');
const config=require('../config/config.json');
require('dotenv').config();

// get the dev config
const env=process.env.NODE_ENV||'development';
const {username, password, database, host, dialect}=config[env];

// initialize Sequelize
const sequelize=new Sequelize(database, username, password,{
    host,
    dialect
});

// test the connection

async function connectdb(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connectdb();
