import express from "express";
import { connectPg } from "./config/database/pgconfig.js";
import { customerRoutes } from "./routes/customer.route.js";


await connectPg();

const app = express();

app.use(express.json());

app.use('/customers', customerRoutes);

export default app;