const addOrganizationData = `insert into "organizations" (org_id, name) values ($1, $2)`;
const addItemData = `insert into "items" (item_id, type, description) values ($1, $2, $3)`;
const addPricingData = `insert into "pricings" (org_id, item_id, zone, base_distance_in_km, km_price, fix_price) values ($1, $2, $3, $4, $5, $6)`;
const getPricingData = `select base_distance_in_km, km_price, fix_price from "pricings" where org_id=$1 and item_id=$2 and zone=$3`;

module.exports = {
  addOrganizationData,
  addItemData,
  addPricingData,
  getPricingData,
};
