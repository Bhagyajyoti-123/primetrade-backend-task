const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("PrimeTrade Backend Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});