'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        static associate(models) {
            Role.hasMany(models.User, { foreignKey: 'roleId' });
        }
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
};
