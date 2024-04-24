const organizations = [
  {
    org_id: "000",
    name: "Tulip",
  },
  {
    org_id: "001",
    name: "Radish",
  },
  {
    org_id: "010",
    name: "Carrot",
  },
  {
    org_id: "011",
    name: "Ginger",
  },
  {
    org_id: "100",
    name: "Tomato",
  },
];

const items = [
  {
    item_id: "0000",
    type: "perishable",
    description: "123",
  },
  {
    item_id: "0001",
    type: "non-perishable",
    description: "456",
  },
  {
    item_id: "0010",
    type: "perishable",
    description: "789",
  },
  {
    item_id: "0011",
    type: "non-perishable",
    description: "101112",
  },
  {
    item_id: "0100",
    type: "perishable",
    description: "131415",
  },
];

const pricings = [
  {
    org_id: "000",
    item_id: "0000",
    zone: "alpha",
    base_distance_in_km: 5,
    km_price: "1.5/1",
    fix_price: 10,
  },
  {
    org_id: "001",
    item_id: "0001",
    zone: "beta",
    base_distance_in_km: 6,
    km_price: "2/1",
    fix_price: 8,
  },
  {
    org_id: "010",
    item_id: "0010",
    zone: "gamma",
    base_distance_in_km: 7,
    km_price: "2.5/1",
    fix_price: 13,
  },
  {
    org_id: "011",
    item_id: "0011",
    zone: "delta",
    base_distance_in_km: 8,
    km_price: "1.5/1",
    fix_price: 17,
  },
  {
    org_id: "100",
    item_id: "0100",
    zone: "eplison",
    base_distance_in_km: 9,
    km_price: "1/1",
    fix_price: 11,
  },
];

module.exports = {
  organizations,
  items,
  pricings,
};
