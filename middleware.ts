import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import { setCookie } from 'cookies-next';
import { redirect } from 'next/dist/server/api-utils';
import * as jose from 'jose';
const encodedSecret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(request: NextRequest, resp: NextResponse) {
  // console.log('.env ', process.env.JWT_SECRET);
  // console.log('req headers', request.headers);
  const response = NextResponse.next();
  let isAuthenticated = false;
  const token = request.cookies.get('Authentication');
  if (token?.value) {
    try {
      const res = await jose.jwtVerify(token?.value, encodedSecret);
      if (Boolean(res)) {
        isAuthenticated = true;
      }
    } catch (error) {
      console.log(error);
      isAuthenticated = false;
    }
  }
  if (request.nextUrl.pathname.includes('tabs')) {
    if (token?.value && isAuthenticated) {
      return response;
    } else {
      setCookie('Authentication', '');
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }
  if (
    (request.nextUrl.pathname === '/' ||
      request.nextUrl.pathname === '/auth/signup' ||
      request.nextUrl.pathname === '/auth/login') &&
    token?.value &&
    isAuthenticated
  ) {
    return NextResponse.redirect(new URL('/tabs/rooms', request.url));
  }
  return response;
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
