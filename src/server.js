import app from "./app.js";
import { env } from "./config/env.js";


app.listen(env.APP_PORT, (error) => {
    try{
        console.log(`Server running on port ${env.APP_PORT}!!`)
        if (error) {
            console.error(error)
                } 
        } catch (error) {
            console.error('somenthing went worng running the server ', error)
        }
    }
);
