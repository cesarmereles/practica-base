import {Router} from "express"
import { ctrolListProduct } from "../controllers/product-controllers.js"

const productsRouter = Router()

//get all products
productsRouter.get("/",ctrolListProduct)

//create new products
productsRouter.post("/",ctrolListProduct)

//get one, update, and delete product
productsRouter.get("/:productId",ctrolListProduct)
productsRouter.put("/:productId",ctrolListProduct)
productsRouter.delete("/:productId",ctrolListProduct)

export {productsRouter}