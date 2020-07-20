const Sequelize = require('sequelize');
const db = require('../config/database');

const Post = db.define('post', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
    },
    title: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    }
},
{
    
});

module.exports = Post;
