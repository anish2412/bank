const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrganisationController,
} = require("../controllers/inventoryController");

const router = express.Router();

// routes
router.post("/create-inventory", authMiddleware, createInventoryController);
router.get("/get-inventory", authMiddleware, getInventoryController);
router.get("/get-donars", authMiddleware, getDonarsController);
router.get("/get-hospital", authMiddleware, getHospitalController);
router.get("/get-organisation", authMiddleware, getOrganisationController);

module.exports = router;
