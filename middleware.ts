import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname: targetPathName } = req.nextUrl;

  const token = req.cookies.get('accessToken');

  // 토큰 없고, 이동하려는 경로가 login 페이지가 아닌경우, 로그인 페이지로 이동
  if (!token && targetPathName !== '/login') {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // 토큰 있을 경우, 로그인 페이지 접근 막기
  if (token && targetPathName === '/login') {
    const url = req.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|favicon.ico).*)',
  ],
};
