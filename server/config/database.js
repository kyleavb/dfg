const Sequelize = require('sequelize');
const config = require('./index');

module.exports = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
    host: config.DB_HOST,
    dialect: config.DB_TYPE
});