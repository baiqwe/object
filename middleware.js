import { NextResponse } from 'next/server';

const locales = ['en', 'zh', 'ja'];

function getLocaleFromPathname(pathname) {
  const segments = pathname.split('/');
  const candidate = segments[1];
  return locales.includes(candidate) ? candidate : 'en';
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/en')) {
    const newPath = pathname.replace(/^\/en/, '') || '/';
    const searchParams = request.nextUrl.searchParams.toString();
    const redirectUrl = new URL(
      `${newPath}${searchParams ? `?${searchParams}` : ''}`,
      request.url
    );
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-current-locale', getLocaleFromPathname(pathname));

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).)*',
  ],
};
