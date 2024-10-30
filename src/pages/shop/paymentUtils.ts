export const processPayment = (paymentDetails: {
  amount: number;
  items: any[];
  method: string;
}) => {
  // Mock implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true); // Simulate successful payment
    }, 1000);
  });
};
