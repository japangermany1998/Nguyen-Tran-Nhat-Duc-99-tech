import {Sequelize} from "sequelize";

const sequelize = new Sequelize('postgres://user:pass@localhost:5432/postgres'); // Example for postgres
    (async () => {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.log('Unable to connect to the database:', error);
        }
    })();

// Graceful shutdown
async function closeConnection() {
    try {
        await sequelize.close();
        console.log('Database connection closed.');
    } catch (error) {
        console.error('Error closing the database connection:', error);
    }
}

// Handle app termination
process.on('SIGINT', async () => {
    console.log('SIGINT received. Shutting down...');
    await closeConnection();
    process.exit(0);
});



export default sequelize;