const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config.js'); 


const Item = sequelize.define('Item', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    reviews: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 
    }
}, {
    tableName: 'items' 
});

module.exports = Item;
