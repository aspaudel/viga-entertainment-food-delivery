module.exports = function (
  total_distance,
  base_distance_in_km,
  km_price,
  fix_price,
  item_type
) {
  console.log(total_distance);
  console.log(base_distance_in_km);
  console.log(typeof km_price);
  console.log(km_price.length);
  console.log(fix_price);
  console.log(item_type);
  let totalPrice = parseInt(fix_price);
  if (total_distance >= base_distance_in_km) {
    let remainingDistance = total_distance - base_distance_in_km;
    let amount1 = 0;
    let amount2 = 0;
    for (let i = 0; i < km_price.length; i++) {
      if (km_price.charAt(i) === "/") {
        amount1 = km_price.substring(0, i);
        amount2 = km_price.substring(i + 1, km_price.length);
      }
    }
    console.log(amount1);
    console.log(amount2);
    if (item_type === "perishable") {
      totalPrice += parseFloat(amount1) * remainingDistance;
    } else {
      totalPrice += parseFloat(amount2) * remainingDistance;
    }
  }
  return totalPrice;
};
