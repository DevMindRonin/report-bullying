import mongoose from "mongoose";
import { t } from "i18next";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/notifications_db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(t("dbConnection"));
  } catch (error) {
    console.error(t("dbConnectionError"), error);
    process.exit(1);
  }
};

export default connectDB;
