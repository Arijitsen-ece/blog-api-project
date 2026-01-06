import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import postRoutes from "./routes/postRoutes.js";
import postApiRoutes from "./routes/postApiRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

/* -------------------- CONFIG -------------------- */

// Load environment variables FIRST
dotenv.config();

// Connect MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

/* -------------------- MIDDLEWARE -------------------- */

// Static files
app.use(express.static("public"));

// Body parsers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// View engine
app.set("view engine", "ejs");

/* -------------------- ROUTES -------------------- */

// EJS (UI) routes
app.use("/", postRoutes);

// REST API routes
app.use("/api", postApiRoutes);

/* -------------------- ERROR HANDLER -------------------- */

// Centralized error handler (must be LAST)
app.use(errorHandler);

/* -------------------- SERVER -------------------- */

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
