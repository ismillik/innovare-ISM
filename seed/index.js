const { db, models: { User, Milestone } } = require('../server/db');
const seedUsers = require('./seed-user-data.json');
const seedMilestones = require('./seed-milestone-data.json');

async function seed() {
    await db.sync({force: true});
    console.log('db synced!');
    const users = await Promise.all(
        seedUsers.map((user) => User.create(user))
    );
    const milestones = await Promise.all(
        seedMilestones.map((milestone) => Milestone.create(milestone))
    );
    console.log('Seeded successfully');
}

async function runSeed() {
    console.log('seeding...');
    try {
        await seed();
    }
    catch(err){
        console.log(err);
    }
    finally {
        console.log('closing db connection');
        await db.close();
        console.log('db connection closed');
    }
}

runSeed();