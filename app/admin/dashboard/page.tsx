import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import ClientDashboard from './client';

export default async function AdminDashboard() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/admin');
  }

  return <ClientDashboard />;
}