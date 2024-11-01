export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  featured: boolean;
  area: string;
}

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  image: string;
}
