const Sequelize = require('sequelize');
const db = require('../db');
const { DataTypes: { STRING, UUID, UUIDV4, BOOLEAN, ENUM, TEXT } } = Sequelize;

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
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    overDue: {
        type: BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    status: {
        type: ENUM('In progress', 'Complete'),
        defaultValue: 'In progress',
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    details: {
        type: TEXT
    }
});

module.exports = Milestone;