'use strict';

/*
mook = {
    up:(queryInterface, Sequelize) => true,
    down: (queryInterface, Sequelize) => true,
*/

/* quando copiar do model
subistituir
allowNull: true,     <==     require: false,
allowNull: false,    <==     require: true,

Sequelize <== DataTypes */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, /* Sequelize */) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
