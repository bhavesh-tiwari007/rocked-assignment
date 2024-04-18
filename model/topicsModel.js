const {DataTypes} = require('sequelize');
const sequelize = require('../db/db');
const Campaign = require('./campaignModel');

const Topic = sequelize.define('rpt_topics', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    campaign_id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

Campaign.hasMany(Topic, {
    foreignKey: 'campaign_id'
});

Topic.belongsTo(Campaign);


module.exports = Topic;