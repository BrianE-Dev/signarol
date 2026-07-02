const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "Signarol backend",
    timestamp: new Date().toISOString(),
  });
});

const apiRouter = express.Router();

apiRouter.get("/health", (req, res) => {
  res.json({ status: "healthy", uptime: process.uptime() });
});

apiRouter.get("/auth/ping", (req, res) => {
  res.json({ message: "Auth route stub is ready" });
});

apiRouter.get("/interview/ping", (req, res) => {
  res.json({ message: "Interview route stub is ready" });
});

app.use("/api", apiRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Signarol backend running on http://localhost:${PORT}`);
});
