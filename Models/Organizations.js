const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const Organizations = sequelize.define(
  "organizations",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    org_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Organizations.sync().then(() => {
  console.log("Organizations Model Synced");
});

module.exports = Organizations;
