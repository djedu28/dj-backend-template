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
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('exemplos', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            descricao: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            /* --- Refetencias --- */

            /* --- uso interno ---*/
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                select: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                select: false,
            }
        })
    },

    down: async (queryInterface, /* Sequelize */) => {
        return queryInterface.dropTable('exemplos');
    }
};
