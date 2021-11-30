const mongoose = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://new-user-next:IkD2Un7OnSJSKr2x@cluster0.kowzf.mongodb.net/nextdatabase?retryWrites=true&w=majority",
      {}
    );
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDb;
