export interface Order {
  id: string;
  customerName: string;
  orderDate: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  total: number;
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentMethod: string;
  paymentStatus: 'paid' | 'pending' | 'failed';
}
