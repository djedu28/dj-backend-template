require('dotenv/config');
const pg = require('pg');

module.exports =

    process.env.BD === "PROD" ?
        { // PROD
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
        : process.env.BD === "VERCEL" ?
            {
                dialect: 'postgres',
                dialectModule: pg,
                host: process.env.POSTGRES_HOST,
                options: {
                    port: process.env.POSTGRES_PORT || '5432',
                },
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DATABASE,
                define: {
                    timestamps: true,
                    underscored: true,
                },
                dialectOptions: {
                    ssl: {
                        require: true,
                        rejectUnauthorized: false
                    }
                }
            }
            : { // DEV
                dialect: 'sqlite',
                storage: 'api/database/database.sqlite', // caminho para o arquivo do banco de dados
                define: {
                    timestamps: true,
                    underscored: true,
                },
            }
