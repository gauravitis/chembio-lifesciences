import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { db } from '@/db';
import { products } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const product = await db.select()
      .from(products)
      .where(eq(products.id, params.id));

    if (!product.length) {
      return new NextResponse("Product not found", { status: 404 });
    }

    return NextResponse.json(product[0]);
  } catch (error) {
    console.error('Error fetching product:', error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { name, category, description, specifications, imageUrl } = body;

    if (!name || !category) {
      return new NextResponse("Name and category are required", { status: 400 });
    }

    const updatedProduct = await db.update(products)
      .set({
        name,
        category,
        description,
        specifications,
        imageUrl,
      })
      .where(eq(products.id, params.id))
      .returning();

    if (!updatedProduct.length) {
      return new NextResponse("Product not found", { status: 404 });
    }

    return NextResponse.json(updatedProduct[0]);
  } catch (error) {
    console.error('Error updating product:', error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const deletedProduct = await db.delete(products)
      .where(eq(products.id, params.id))
      .returning();

    if (!deletedProduct.length) {
      return new NextResponse("Product not found", { status: 404 });
    }

    return NextResponse.json(deletedProduct[0]);
  } catch (error) {
    console.error('Error deleting product:', error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
