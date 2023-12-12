import { Router } from "express";
import {
  ctrlCreateListProduct,
  ctrolDeleteProduct,
  ctrolGetProduct,
  ctrolListProduct,
  ctrolUpdateProduct,
} from "../controllers/product-controllers.js";

const productsRouter = Router();
//todo EN LAS RUTAS DEBO CONTROLAR
//get all products
productsRouter.get("/", ctrolListProduct);

//create new products
productsRouter.post("/", ctrlCreateListProduct);

//get one, update, and delete product
productsRouter.get("/:productId", ctrolGetProduct);
productsRouter.patch("/:productId", ctrolUpdateProduct);
productsRouter.delete("/:productId", ctrolDeleteProduct);

export { productsRouter };
