'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
    }
    Role.init({
        name: {
            type: DataTypes.STRING,
        },
    }, {
        sequelize,
        modelName: 'Role',
        timestamps: false
    });

    return Role
    Role.hasMany(sequelize.User, { foreignKey: 'roleId' });
};
