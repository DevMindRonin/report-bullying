import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import notificationsRoutes from "./routes/notificationsRoutes.js";

dotenv.config();
connectDB();

const SERVER_PORT = process.env.SERVER_PORT || 5000;
const DATA_LIMIT = `${process.env.DATA_LIMIT}mb`;
const app = express();

app.use(express.json({ limit: DATA_LIMIT }));
app.use(express.urlencoded({ extended: true, limit: DATA_LIMIT }));
app.use(cors());

app.use("/api/notifications", notificationsRoutes);

app.listen(SERVER_PORT, () => {
  console.log(`Server running on http://localhost:${SERVER_PORT}`);
});
