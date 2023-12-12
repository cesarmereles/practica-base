import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    maxLength: 50,
    minLength: 3,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: 200,
    minLength: 3,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    enum: ["computer", "phone", "accesories", "audio", "videogames"],
  },
  stock: {
    type: Number,
    default: 0,
    min: 0,
  },
  image: {
    type: String,
    required: true,
  },
  public: {
    type: Boolean,
    default: false,
  },
});
//todo esta funcionalidad nos permite controlar antes de que se guarde
ProductSchema.pre("save", function (next) {
  //this.isModified devuelve true o false tanto cuando se guarda o edita
  //*REDONDEA UN NUMERO
  if (this.isModified("price")) {
    this.price = +this.price.toFixed(2);
  }
  //*CONTROLAMOS QUE NO PERMITA AGREGAR CARACTERES ESTRAÑOS
  if (this.isModified("name")) {
    this.name = +this.price.toFixed(2);
  }
  next();
});
export const ProductModel = model("Product", ProductSchema);
