import { clerkClient } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";

export async function getCurrentUser() {
  try {
    const { userId } = auth();
    
    if (!userId) {
      return null;
    }

    const user = await clerkClient.users.getUser(userId);
    return user;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

export async function isAdmin() {
  try {
    const { userId } = auth();
    
    if (!userId) {
      return false;
    }

    const user = await clerkClient.users.getUser(userId);
    // You can customize this based on your admin criteria
    // For example, checking a specific email domain or role
    return user.emailAddresses.some(email => 
      email.emailAddress.endsWith('@chembio.com')
    );
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
}
