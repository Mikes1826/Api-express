import * as custRepo from '../respositories/customer.repository.js';


export const getAllCustSer = async () => {
    return await custRepo.getAllCustomers();
};

export const createCustServ = async ({name, email, phone}) => {
    // basics validations takew that in mind bro
    if(!name || !email || !phone){
        throw new Error ('Name, Email and phone are required');
    };
    // validacion de email profundiza en regex esa monda que es?
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error('Invalid email format');
    };
    return await custRepo.createCustomer(name, email, phone);
}

