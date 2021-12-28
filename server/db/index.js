const db = require('./db');
const User = require('./models/User');
const Milestone = require('./models/Milestone');

User.hasMany(Milestone);
Milestone.belongsTo(User);

module.exports = {
    db,
    models: {
        User,
        Milestone
    }
}