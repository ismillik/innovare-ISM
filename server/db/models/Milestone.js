const Sequelize = require('sequelize');
const db = require('../db');
const { DataTypes: { STRING, UUID, UUIDV4, DATEONLY, TEXT } } = Sequelize;

const Milestone = db.define('milestone', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    title: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    dueDate: {
        type: DATEONLY
        // allowNull: false,
        // validate: {
        //     notEmpty: true
        // }
    },
    details: {
        type: TEXT
    }
});

module.exports = Milestone;