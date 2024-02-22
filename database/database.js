import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('delivery', 'Mohammad', '12345', {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;
