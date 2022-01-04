const { db, models: { User, Milestone } } = require('../server/db');
const seedUsers = require('./seed-user-data.json');
const seedMilestones = require('./seed-milestone-data.json');

const syncAndSeed = async () => {
    console.log('seeding...');
    try {
        await db.sync({force: true});
        console.log('db synced!');
        const users = await Promise.all(
            seedUsers.map((user) => User.create(user))
        );
        const milestones = await Promise.all(
            seedMilestones.map((milestone) => Milestone.create(milestone))
        );
        const user1 = users[0];
        await Promise.all(milestones.map(milestone => milestone.setUser(user1)));
        console.log('Seeded successfully');
    }
    catch(err) {
        console.log('There was a problem seeding');
        console.log(err.stack);
    }
    finally {
        console.log('closing db connection');
        await db.close();
        console.log('db connection closed');
    }
}

syncAndSeed();