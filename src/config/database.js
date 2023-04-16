require('dotenv/config');

module.exports = process.env.BD !== "PROD"
    ? { // DEV
        dialect: 'sqlite',
        storage: './database.sqlite', // caminho para o arquivo do banco de dados
        define: {
            timestamps: true,
            underscored: true,
        },
    }
    : { // PROD
        dialect: 'postgres',
        host: process.env.BD_HOST || 'motty.db.elephantsql.com',
        options: {
            port: process.env.BD_PORT || '5432'
        },
        username: process.env.BD_USER,
        password: process.env.BD_PASS,
        database: process.env.BD_DATA,
        define: {
            timestamps: true,
            underscored: true,
        },
    }
