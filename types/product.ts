export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  specifications: string;
  imageUrl: string;
  price: string;
  stock: string;
  tags: string[];
  created_at?: string;
  updated_at?: string;
}
