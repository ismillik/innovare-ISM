const Sequelize = require('sequelize');
const db = require('../db');
const { DataTypes: { STRING, UUID, UUIDV4 } } = Sequelize;

const User = db.define('user', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    firstName: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastName: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageURL: {
        type: STRING,
        defaultValue: 'noImage.jpg'
    }
});

module.exports = User;