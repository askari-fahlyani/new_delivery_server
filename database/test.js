import sequelize from './database.js';  // Adjust the path to your database.js file

async function testDatabaseConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testDatabaseConnection();