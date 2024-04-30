'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
    }
    Book.init({
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
    }, {
        sequelize,
        modelName: 'Book',
    });

    return Book;
};