import express from "express";
import multer from "multer";
import path from "path";
import Notification from "../models/Notification.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/", async (req, res) => {
  try {
    const notifications = await Notification.find().lean();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: "Chyba při načítání upozornění." });
  }
});

router.post("/", upload.single("whistlerFile"), async (req, res) => {
  const newNotification = new Notification({
    ...req.body,
    whistlerAge: Number(req.body.whistlerAge),
    whistlerFile: req.file
      ? {
          originalname: req.file.originalname,
          path: req.file.path,
          filename: req.file.filename,
        }
      : null,
  });

  try {
    const savedNotification = await newNotification.save();
    res.json(savedNotification);
  } catch (error) {
    res.status(500).json({ error: "Chyba při ukládání notifikace." });
  }
});

router.put("/:id", upload.single("whistlerFile"), async (req, res) => {
  const updatedData = {
    ...req.body,
    whistlerAge: Number(req.body.whistlerAge),
  };

  if (req.file) {
    updatedData.whistlerFile = {
      originalname: req.file.originalname,
      path: req.file.path,
      filename: req.file.filename,
    };
  }

  try {
    const updatedNotification = await Notification.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    ).lean();
    if (updatedNotification) {
      res.json(updatedNotification);
    } else {
      res.status(404).json({ error: "Notification nenalezeno" });
    }
  } catch (error) {
    res.status(500).json({ error: "Chyba při aktualizaci notifikace." });
  }
});

router.get("/:id/file", async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (notification?.whistlerFile?.path) {
      const filePath = path.resolve(notification.whistlerFile.path);
      res.download(filePath, notification.whistlerFile.originalname, (err) => {
        if (err) {
          console.error("Chyba při stahování souboru:", err);
          res.status(500).send("Nepodařilo se stáhnout soubor.");
        }
      });
    } else {
      res.status(404).send("Soubor nenalezen");
    }
  } catch (error) {
    res.status(500).json({ error: "Chyba při načítání souboru." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedNotification = await Notification.findByIdAndDelete(
      req.params.id
    );
    if (deletedNotification) {
      res.json({ success: true, _id: deletedNotification._id });
    } else {
      res.status(404).json({ error: "Notification nenalezeno" });
    }
  } catch (error) {
    res.status(500).json({ error: "Chyba při mazání notifikace." });
  }
});

export default router;
