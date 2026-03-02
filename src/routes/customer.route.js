import { Router } from "express";
import { getCustomer, createCustomer } from "../controllers/customer.controller.js";

export const customerRoutes = Router();

customerRoutes.get('/', getCustomer);

customerRoutes.post('/', createCustomer);

