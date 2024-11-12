import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  entityType: String,
  entityName: String,
  whistlerName: String,
  whistlerAge: Number,
  whistlerNote: String,
  whistlerFile: {
    originalname: String,
    path: String,
    filename: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Notification = mongoose.model("Notification", notificationSchema);
export default Notification;
