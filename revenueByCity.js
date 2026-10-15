export function revenueByCity(orders) {
  return orders.reduce((result, order) => {
   
      result[order.city] = (result[order.city] || 0) + order.total;
return result;
 }, {});
}