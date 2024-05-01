'use strict';
const {hash} = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      username: 'user',
      password: await hash('user_password', 10),
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});


    await queryInterface.bulkInsert('Users', [{
      username: 'admin',
      password: await hash('admin_password', 10),
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};
