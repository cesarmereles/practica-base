import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

//variables
import { config } from "./src/settings/config.js";
import { productsRouter } from "./src/routes/product-router.js";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

//routes
app.use("/api/products",productsRouter)

app.listen(config.PORT, () => {
  console.log(`Server corriendo en ${config.PORT}`);
});
