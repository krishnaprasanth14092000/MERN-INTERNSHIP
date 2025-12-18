import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoute.js";

dotenv.config(); // Load .env

const app = express();

app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.log("❌ DB Connection Error:", err));

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
