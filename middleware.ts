import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: ["/", "/products", "/about", "/contact", "/team"],
  afterAuth(auth, req) {
    // If the user is not signed in and trying to access a protected route,
    // redirect them to the sign-in page
    if (!auth.userId && !auth.isPublicRoute) {
      return NextResponse.redirect(new URL('/admin', req.url));
    }

    // If the user is signed in and trying to access the /admin page,
    // redirect them to the admin dashboard
    if (auth.userId && req.nextUrl.pathname === '/admin') {
      return NextResponse.redirect(new URL('/admin/dashboard', req.url));
    }
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
