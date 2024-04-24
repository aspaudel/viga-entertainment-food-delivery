const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const Pricings = sequelize.define(
  "pricings",
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
    item_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    zone: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    base_distance_in_km: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: false,
    },
    km_price: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: false,
    },
    fix_price: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: false,
    },
  },
  {
    timestamps: false,
  }
);

Pricings.sync().then(() => {
  console.log("Pricings Model Synced");
});

module.exports = Pricings;
