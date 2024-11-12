import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/notifications_db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Připojeno k MongoDB");
  } catch (error) {
    console.error("Chyba při připojení k MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
