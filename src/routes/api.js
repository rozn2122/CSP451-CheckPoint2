const express = require("express");

const router = express.Router();

/**
 * Starter endpoint to prove the API works.
 * Feature branch: feature/api-endpoints should expand this structure:
 * - add route modules, controllers, and validation
 * - add at least one POST endpoint
 */
router.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

module.exports = { router };
import express from “express”;
const router = express.Router();

router.get(”/users”, (req, res) => {
res.json([{ id: 1, name: “Test User” }]);
});

router.post(”/users”, (req, res) => {
res.status(201).json({ message: “User created” });
});

export default router;

Import into app.js.
