import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { Product } from '@/app/types/product';

// Helper function to read/write products file
async function getProductsFilePath() {
  return path.join(process.cwd(), 'app/data/products.json');
}

export async function GET() {
  try {
    const filePath = await getProductsFilePath();
    const fileData = await fs.readFile(filePath, 'utf-8');
    const data: { products: Product[] } = JSON.parse(fileData);
    
    return NextResponse.json(data.products);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const product = await request.json();
    const filePath = await getProductsFilePath();
    const fileData = await fs.readFile(filePath, 'utf-8');
    const data: { products: Product[] } = JSON.parse(fileData);
    
    // Add new product with generated ID
    const newProduct: Product = {
      id: crypto.randomUUID(),
      ...product,
      tags: product.tags ? product.tags.split(',').map((tag: string) => tag.trim()) : [],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    
    data.products.push(newProduct);
    
    // Write back to file
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    
    return NextResponse.json(newProduct);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add product' },
      { status: 500 }
    );
  }
}
