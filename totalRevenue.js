export function totalRevenue(orders) {
  return orders.reduce((total, order) => total + order.total, 0);
}
