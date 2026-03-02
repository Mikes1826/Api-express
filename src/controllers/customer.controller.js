import * as custServ from '../services/customer.service.js';

export const getCustomer = async (req, res) => {
    try {
        const customers = await custServ.getAllCustSer();
        res.status(200).json(customers);
    } catch(error){
        res.status(500).json({message : error.message})
    };
};


export const createCustomer = async(req, res) => {
    try {
        const { name, email, phone} = req.body;
        const newCustomer  = await custServ.createCustServ({name, email, phone});
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
};