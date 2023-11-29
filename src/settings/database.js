import {connect} from "mongoose"
import { config } from "./config.js";
export const startConect = async() =>{
    try {
        const db = await connect(config.MONGO_URI,{
            dbName:"products-db"
        })
        console.log("DB is connected ", db.connection.name);       
    } catch (error) {
        console.log(error);
    }

 
}

    