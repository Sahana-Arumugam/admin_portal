import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import registrationRoutes from "./routes/registrationRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: true,
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// 🔥 MongoDB Connection (NO db.js)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });

// Health check route (IMPORTANT for Render)
app.get("/", (req, res) => {
  res.send("🚀 Backend is running");
});

// API routes
app.use("/api", registrationRoutes);

// Dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
