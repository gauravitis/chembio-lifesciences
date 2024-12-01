export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: string;
  price: string;
  stock: string;
  tags: string[];
  imageUrl?: string;
}
