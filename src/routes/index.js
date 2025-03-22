const express = require("express");
const userRoutes = require("./userRoutes");
const addressRoutes = require("./addressRoutes");
const loginRoutes = require("./loginRoutes");

const router = express.Router();

router.use("/users", userRoutes);
router.use("/addresses", addressRoutes);
router.use("/login", loginRoutes);

module.exports = router;
