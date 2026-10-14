const orders = [
  { id: 1, customer: "Aung", city: "Yangon", total: 25000, status: "paid" },
  { id: 2, customer: "Su", city: "Mandalay", total: 12000, status: "pending" },
  { id: 3, customer: "Kyaw", city: "Yangon", total: 40000, status: "paid" },
  {
    id: 4,
    customer: "Mya",
    city: "Mandalay",
    total: 8000,
    status: "cancelled",
  },
];
// Array.prototype.myMap = function (callback) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }
//   return result;
// };

// console.log([1, 2, 3].myMap((n) => n * 10));

// Array.prototype.myFilter = function (callback) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     if(callback(this[i], i, this)){
//       result.push(this[i]);
//     }
//   }
//   return result;
// };

// console.log([1, 2, 3,4,5].myFilter((n) => n > 1));

const test = orders.map(order=>order.customer);
console.log(test);

const test2 = orders.filter(order=>order.status === "pending");
console.log(test2);

const paidwithorderNames = orders.filter((order)=>order.status === "paid").map((order)=> order.customer);
console.log(paidwithorderNames);

const findorder = orders.find((order)=>order.id === 3);
console.log(findorder);


const totalreduce = orders.reduce((acc,order) => {
  return acc + order.total;
},0);
console.log(totalreduce);

// const reduce = orders.map((order)=>order.city).reduce((acc,order) => {
//   return acc + order.total;
// },0);
const reduce = orders.map((order)=>order.city);
console.log(reduce);

const totalByCity = orders.reduce((acc, order) => {
  acc[order.city] = (acc[order.city] || 0) + order.total;

  return acc;
}, {});

console.log(totalByCity);

const sortOrder = orders.sort((a,b) => a.total - b.total);
console.log(sortOrder);