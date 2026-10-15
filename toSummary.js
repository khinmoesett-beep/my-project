export function toSummary(orders) {
  return orders.map(order => ({
    id: order.id,
    customer: order.customer,
    total: `${Number(order.total).toLocaleString("en-US")} MMK`
  }));
}