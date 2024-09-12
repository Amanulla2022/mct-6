const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.log(`Unable to connect to DB ${error}`);
  }
};

module.exports = connectToDB;
