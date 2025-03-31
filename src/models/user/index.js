// src/models/user/index.js
const sequelize = require("../../config/database");
const User = require("./UserModel");
const Contact = require("./ContactModel");
const Address = require("./AddressModel");
const Education = require("./EducationModel");
const Category = require("./CategoryModel");
const Experience = require("./ExperienceModel");

User.hasMany(Contact, { foreignKey: "userId", onDelete: "CASCADE" });
Contact.belongsTo(User, { foreignKey: "userId" });

User.hasOne(Address, { foreignKey: "userId", onDelete: "CASCADE" });
Address.belongsTo(User, { foreignKey: "userId" });

User.belongsToMany(Education, {
  through: "user_educations",
  foreignKey: "userId",
  otherKey: "educationId",
});
Education.belongsToMany(User, {
  through: "user_educations",
  foreignKey: "educationId",
  otherKey: "userId",
});

User.belongsToMany(Category, {
  through: "user_categories",
  foreignKey: "userId",
  otherKey: "categoryId",
});
Category.belongsToMany(User, {
  through: "user_categories",
  foreignKey: "categoryId",
  otherKey: "userId",
});

User.hasMany(Experience, { foreignKey: "userId", onDelete: "CASCADE" });
Experience.belongsTo(User, { foreignKey: "userId" });

module.exports = {
  sequelize,
  User,
  Education,
  Contact,
  Category,
  Address,
  Experience,
};
