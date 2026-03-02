import { pool } from "../config/database/pgconfig.js";

export const getAllCustomers = async () => {
    const query = 'SELECT * FROM mikeresume.customers';
    try {
        const {rows} = await pool.query(query);

        return rows;
    } catch(error){
        console.error('error getting customers ', error.message)
        throw new Error ('Database error while fetching customers')
    }
};

export const createCustomer  = async (name, email, phone) => {
    const query = 'INSERT INTO mikeresume.customers (name_customer, email_customer, cutomer_phone) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, email, phone]

    try{
        const {rows} = await pool.query(query, values);
        return rows[0];
    } catch (error) {
        if(error.code === '23505'){
            throw new Error ('Email already exist >;v')
        }
        console.error('Database error creating customer:', error.message);
        throw new Error('Database error while creating customer');
    }
};