// cartUtils.js
interface Product {
  id: string | number;
  price: number;
  // ... add other required product properties
}

interface CartItem extends Product {
  quantity: number;
}

export const getCart = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  };
  
  export const addToCart = (product: Product) => {
    const cart = getCart() as CartItem[];
    const existingItem = cart.find((item: CartItem) => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1
      });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
  };
  
  export const removeFromCart = (productId: string | number) => {
    const cart = getCart() as CartItem[];
    const updatedCart = cart.filter((item: CartItem) => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
  };
  
  export const updateQuantity = (productId: string | number, quantity: number) => {
    const cart = getCart() as CartItem[];
    const item = cart.find((item: CartItem) => item.id === productId);
    
    if (item) {
      item.quantity = Math.max(0, quantity);
      if (item.quantity === 0) {
        return removeFromCart(productId);
      }
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
  };
  
  export const getCartTotal = (cart: CartItem[]) => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };