import { supabase } from '@/lib/supabase';
import { Product } from '@/types/product';

const PRODUCTS_TABLE = 'products';

export const productService = {
  async getAllProducts(): Promise<Product[]> {
    const { data, error } = await supabase
      .from(PRODUCTS_TABLE)
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getProductById(id: string): Promise<Product | null> {
    const { data, error } = await supabase
      .from(PRODUCTS_TABLE)
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  async createProduct(product: Omit<Product, 'id'>): Promise<Product> {
    const { data, error } = await supabase
      .from(PRODUCTS_TABLE)
      .insert([product])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateProduct(id: string, product: Partial<Product>): Promise<Product> {
    const { data, error } = await supabase
      .from(PRODUCTS_TABLE)
      .update(product)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteProduct(id: string): Promise<void> {
    const { error } = await supabase
      .from(PRODUCTS_TABLE)
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  async searchProducts(query: string): Promise<Product[]> {
    const { data, error } = await supabase
      .from(PRODUCTS_TABLE)
      .select('*')
      .or(`name.ilike.%${query}%, description.ilike.%${query}%`)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getProductsByCategory(category: string): Promise<Product[]> {
    const { data, error } = await supabase
      .from(PRODUCTS_TABLE)
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }
};
