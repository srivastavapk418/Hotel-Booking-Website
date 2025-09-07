/*
import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request);

  return NextResponse.redirect(new URL("/about", request.url));
}
*/

import { auth } from "@/app/_lib/auth";
export const middleware = auth;

// Middleware runs for every single route. So, making it redirect for a particular routes, we can use matcher
export const config = {
  // matcher: ["/account", "/anyRoute"],
  matcher: ["/account"],
};

//Once the user hit the '/account', it redirect it to auth.js file then authorized() will be called.
