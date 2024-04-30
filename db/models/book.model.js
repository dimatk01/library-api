import Sequelize, {DataTypes} from 'sequelize';
const sequelize = new Sequelize('postgres');
const Book = sequelize.define(
    'Book',
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        },
        year: {
            type: DataTypes.NUMBER,
        },
        genre: {
            type: DataTypes.STRING,
        },
    },

);