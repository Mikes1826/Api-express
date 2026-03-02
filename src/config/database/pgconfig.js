import { Pool } from "pg";
import { env } from "../env.js";


export let pool;

export const connectPg = async () => {
    try {
        const poolPg = new Pool({
            host : env.DB.HOST,
            port : env.DB.PORT,
            database : env.DB.DATABASE,
            user : env.DB.USER,
            password : env.DB.PASSWORD
        });

        await poolPg.connect()
        console.log('postgres connected!!')
        pool = poolPg;
    } catch(error){
        console.error(error)
        process.exit(1)
    }
};