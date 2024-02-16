import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
  apiAuthPrefix,
  publicRoutes,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
} from "./routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  //   const isLoggedIn = !!req.auth;
  //   const route = req.nextUrl.pathname;
  //   console.log("ROUTE:", route);
  //   console.log("IS LOGGED IN:", isLoggedIn);

  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null; // do not any action
  }
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
