import { ProductModel } from "../models/product-model.js";
//*TIENE QUE SER FUNCIONES ASINCRONAS
export const ctrlCreateListProduct = async (req, res) => {
  try {
    const newProduct = await ProductModel.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
//*TODOS LOS POST CON EL METODO FIND TRAE TODOS LOS REGISTROS
export const ctrolListProduct = async (req, res) => {
  try {
    const allProducts = await ProductModel.find({}, ["-__v"]);
    if (allProducts.length < 1) return res.sendStatus(204);
    res.json(allProducts);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//*BUSCO UN SOLO REGISTRO USANDO EL ID ENVIADO POR PARAMETRO
export const ctrolGetProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await ProductModel.findOne({ _id: productId });
    if (!product) return res.sendStatus(404);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
//*PARA ACTUALIZAR UN REGISTRO VIA ID
export const ctrolUpdateProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const updateProduct = await ProductModel.findOneAndUpdate(
      { _id: productId },
      req.body,
      { new: true }
    );
    res.json(updateProduct);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const ctrolDeleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const deleteProduct = await ProductModel.findOneAndDelete({
      _id: productId,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
