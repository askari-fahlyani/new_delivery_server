import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2), // Adjust precision and scale as needed
        allowNull: false
    },
    picture: {
        type: DataTypes.STRING, // URL or path to the picture
        allowNull: true
    },
    discount: {
        type: DataTypes.INTEGER, // Representing percentage, for instance
        allowNull: true,
        defaultValue: 0
    }
});

export default Product;
