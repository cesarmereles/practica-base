//import { config } from "dotenv";
import "dotenv/config";
//config()
export const config = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/products-db"
};
