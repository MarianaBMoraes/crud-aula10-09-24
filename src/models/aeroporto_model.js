const { SchemaType } = require("mongoose");
const db = require("../db.js");

const Schema = db.Schema;

const aeroportoSchema = new Schema({
  nome: {
    type: String,
  },
  endereco: {
    type: Schema.Types.Mixed,
    required: true
  },
});

const Aeroporto = db.model("Aeroporto", AeroportoSchema);

module.exports = Aeroporto;
