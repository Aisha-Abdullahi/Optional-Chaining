const order = {
  customer: {
    address: {
      city: ""
    }
  }
};

if (!order?.customer?.address?.city) {
  console.log("city is required");
}

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }