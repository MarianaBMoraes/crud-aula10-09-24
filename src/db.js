const mongoose = require("mongoose");

const mongoDB = "mongodb+srv://mariana_bmoraes:mDWPwYZKokY0Q9Lh@cluster0.kqjgr.mongodb.net/"

async function main() {
  await mongoose.connect(mongoDB);
}

main()
  .then(() => console.log("Conectado com sucesso!"))
  .catch((err) => console.log(err));

module.exports = mongoose;
