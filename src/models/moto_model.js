const { SchemaType } = require("mongoose");
const db = require("../db.js");

const Schema = db.Schema;

const motoSchema = new Schema({
  marca: {
    type: String,
  },
  cor: {
    type: String,
    required: true,
  },
  modelo: {
    type: String
  },
  cilindrada: {
    type: Number
  },

});

const Moto = db.model("Moto", motoSchema);

module.exports = Moto;
