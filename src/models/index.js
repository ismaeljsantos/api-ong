// src/models/index.js
const sequelize = require("../config/database");
const User = require("./user"); // User contém User, Address, Category, etc.
const Blog = require("./blog"); // Blog contém Post, Tag, etc.

module.exports = {
  sequelize,
  User,
  Blog,
};
