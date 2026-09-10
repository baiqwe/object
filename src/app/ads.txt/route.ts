const adsTxt = 'google.com, pub-2499950673294937, DIRECT, f08c47fec0942fa0\n'

export function GET() {
  return new Response(adsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
    },
  })
}
