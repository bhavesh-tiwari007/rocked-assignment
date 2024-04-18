const {DataTypes} = require('sequelize');
const sequelize = require('../db/db');

const Roster = sequelize.define('Roster', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    campaign: {
        type: DataTypes.STRING,
        allowNull: false
    },
    topics: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dealer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    training_data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        ENUM:[0,1],    // 0 = draft, 1 = completed
        defaultValue: 0,
        allowNull: false
    },
    trainer_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    attendees: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false
    }
});



module.exports = Roster;