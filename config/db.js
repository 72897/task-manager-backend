const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(` MongoDB Connected: ${conn.connection.host}`);

    mongoose.connection.on("disconnected", () => {
      console.warn(" diconnected");
    });

    mongoose.connection.on("error", (err) => {
      console.error(`connection error: ${err.message}`);
    });
  } catch (error) {
    console.error(` connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
