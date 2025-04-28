import express, { json, urlencoded } from "express";
import { Pool } from "pg";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Setup Postgres connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));

// Test route
app.get("/", (_req, res) => {
  res.send("Server is up and running!");
});

// Connect to database first, THEN start the server
async function startServer() {
  try {
    await pool.connect(); // 👈 Connect immediately at startup
    console.log("✅ Connected to Neon Postgres database!");

    app.listen(PORT, () => {
      console.log(`⚡️ Server listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to connect to the database:", error);
    process.exit(1); // Exit app if db connection fails
  }
}

startServer();