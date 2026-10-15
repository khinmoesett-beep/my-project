import { formatMMK } from "./formatMMK.js";

export function topCustomers(orders, n = 3) {
    const totals = {};
    for(const order of orders){
        const customer = order.customer;
        totals[customer] = (totals[customer] || 0) + order.total;
  }
   return Object.entries(totals)
    .map(([customer, total]) => ({ customer, total: formatMMK(total) }))
    .sort((a, b) => b.total - a.total)
    .slice(0, n);
}
    

