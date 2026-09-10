import { NextResponse } from 'next/server';

const locales = ['en', 'zh', 'ja'];

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

  const response = NextResponse.next();
  const cacheControl = pathname === '/robots.txt' || pathname === '/sitemap.xml' || pathname === '/ads.txt'
    ? 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800'
    : 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800';

  response.headers.set('Cache-Control', cacheControl);

  return response;
}

export const config = {
  matcher: [
    '/robots.txt',
    '/sitemap.xml',
    '/ads.txt',
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).)*',
  ],
};
