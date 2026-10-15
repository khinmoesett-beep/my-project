import orders from "./order.js";
import { getPaidOrders } from "./getPaidOrders.js";
import { totalRevenue } from "./totalRevenue.js";
import { revenueByCity } from "./revenueByCity.js";
import { topCustomers } from "./topCustomers.js";
import { formatMMK } from "./formatMMK.js";
import { toSummary } from "./toSummary.js";

const paidOrders = getPaidOrders(orders);
console.log(paidOrders);

const totalrevenue = totalRevenue(orders);
console.log(totalrevenue);

const revenuebycity = revenueByCity(orders);
console.log(revenuebycity);

const topcustomers = topCustomers(orders);
 console.log(topcustomers);

const formatmmk = formatMMK(2000);
console.log(formatmmk);

 const tosummary = toSummary(orders);
 console.log(tosummary);