import 'dotenv/config.js';

export const env = {
    APP_PORT : process.env.PORT,
    DB : {
        HOST : process.env.DB_HOST,
        PORT : process.env.DB_PORT,
        DATABASE : process.env.DB_NAME,
        USER : process.env.DB_USER,
        PASSWORD : process.env.DB_PASSWORD
    },
    MONGO : {
        URI : process.env.MONGO_URI_DB
    }
};