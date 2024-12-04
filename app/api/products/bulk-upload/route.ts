import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { Product, ProductInput } from '@/app/types/product';

export async function POST(request: Request) {
  try {
    const { products } = await request.json();
    const filePath = path.join(process.cwd(), 'app/data/products.json');
    const fileData = await fs.readFile(filePath, 'utf-8');
    const data: { products: Product[] } = JSON.parse(fileData);

    // Process and validate each product
    const validProducts = products.filter((product: ProductInput) => {
      return (
        product.catalogueId &&
        product.name &&
        product.description &&
        product.brand &&
        product.casNumber &&
        product.packSize &&
        product.price
      );
    }).map((product: ProductInput): Product => ({
      id: crypto.randomUUID(),
      ...product,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }));

    // Add new products to existing ones
    data.products = [...data.products, ...validProducts];

    // Write back to file
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({
      success: true,
      message: `Successfully uploaded ${validProducts.length} products`,
    });

  } catch (error) {
    console.error('Bulk upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload products' },
      { status: 500 }
    );
  }
} 