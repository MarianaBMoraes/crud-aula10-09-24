const { SchemaType } = require("mongoose");
const db = require("../db.js");

const Schema = db.Schema;

const motoSchema = new Schema({
  marca: {
    type: Schema.Types.String,
    required: true
  },
  cor: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  cilindrada: {
    type: Number,
    required: true
  },
  peso: {
    type: Number,
    required: true
  },
});

const Moto = db.model("Moto", motoSchema);

module.exports = Moto;
