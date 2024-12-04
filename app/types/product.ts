export interface Product {
  id: string;
  catalogueId: string;
  name: string;
  description: string;
  brand: string;
  casNumber: string;
  packSize: string;
  price: string;
  imageUrl?: string;
  created_at: string;
  updated_at: string;
}

export interface ProductInput {
  catalogueId: string;
  name: string;
  description: string;
  brand: string;
  casNumber: string;
  packSize: string;
  price: string;
  imageUrl?: string;
} 