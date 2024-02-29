const products = [
  { name: "Apple", price: 0.5, quantity: 10 },
  { name: "Banana", price: 0.3, quantity: 20 },
  { name: "Orange", price: 0.6, quantity: 15 },
];

function calculateTotalSalesWithTax(products, tax) {
  const totalProdcut = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const taxAmount = (totalProdcut * tax) / 100;
  const totalWithTax = taxAmount + totalProdcut;

  return totalWithTax;
}
calculateTotalSalesWithTax(products, 8);

module.exports = calculateTotalSalesWithTax;
