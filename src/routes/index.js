const express = require("express");
const userRoutes = require("./userRoutes");
const addressRoutes = require("./addressRoutes");
const loginRoutes = require("./loginRoutes");
const categoryRoutes = require("./categoryRoutes");

const router = express.Router();

router.use("/users", userRoutes);
router.use("/addresses", addressRoutes);
router.use("/login", loginRoutes);
router.use("/categories", categoryRoutes);

module.exports = router;
