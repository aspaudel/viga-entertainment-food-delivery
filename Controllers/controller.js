const { pool } = require("../db");
const queries = require("./queries");
const { organizations, items, pricings } = require("../JsonSeed/seedData");
const priceCalculator = require("../Services/priceCalculator");
const swaggerJSDoc = require("swagger-jsdoc");

const addOrganizationData = (org_id, name) => {
  pool.query(queries.addOrganizationData, [org_id, name], (error, results) => {
    if (error) throw error;
    console.log("Organization Inserted!");
  });
};

const addItemData = (item_id, type, description) => {
  pool.query(
    queries.addItemData,
    [item_id, type, description],
    (error, results) => {
      if (error) throw error;
      console.log("Item Inserted!");
    }
  );
};

const addPricingData = (
  org_id,
  item_id,
  zone,
  base_distance_in_km,
  km_price,
  fix_price
) => {
  pool.query(
    queries.addPricingData,
    [org_id, item_id, zone, base_distance_in_km, km_price, fix_price],
    (error, results) => {
      if (error) throw error;
      console.log("Pricing Inserted!");
    }
  );
};

const seedData = (req, res) => {
  res.send([organizations, items, pricings]);
  organizations.forEach((organization) => {
    addOrganizationData(organization.org_id, organization.name);
  });
  items.map((item) => {
    addItemData(item.item_id, item.type, item.description);
  });
  pricings.forEach((pricing) => {
    addPricingData(
      pricing.org_id,
      pricing.item_id,
      pricing.zone,
      pricing.base_distance_in_km,
      pricing.km_price,
      pricing.fix_price
    );
  });
};

const calculatePrice = (req, res) => {
  console.log(req.body);
  const { zone, organization_id, item_id, total_distance, item_type } =
    req.body;
  pool.query(
    queries.getPricingData,
    [organization_id, item_id, zone],
    (error, results) => {
      if (error) throw error;
      console.log(results);
      const { base_distance_in_km, km_price, fix_price } = results.rows[0];
      res
        .status(200)
        .json(
          priceCalculator(
            total_distance,
            base_distance_in_km,
            km_price,
            fix_price,
            item_type
          )
        );
    }
  );
  console.log("here");
};

module.exports = {
  seedData,
  calculatePrice,
};
