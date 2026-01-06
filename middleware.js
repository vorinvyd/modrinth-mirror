import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname, search } = request.nextUrl
  
  if (pathname === '/' || pathname === '/app') {
    console.log('Middleware:', {
      pathname,
      url: request.url,
      headers: {
        'x-forwarded-prefix': request.headers.get('x-forwarded-prefix'),
        'x-forwarded-path': request.headers.get('x-forwarded-path'),
        'x-original-uri': request.headers.get('x-original-uri'),
      }
    })
  }
  
  const redirects = {
    '/mods': '/discover/mods',
    '/resourcepacks': '/discover/resourcepacks',
    '/datapacks': '/discover/datapacks',
    '/shaders': '/discover/shaders',
    '/modpacks': '/discover/modpacks',
    '/plugins': '/discover/plugins',
  }
  
  for (const [oldPath, newPath] of Object.entries(redirects)) {
    if (pathname === oldPath || pathname.startsWith(oldPath + '/')) {
      const newPathname = pathname.replace(oldPath, newPath)
      const newUrl = new URL(newPathname + search, request.url)
      return NextResponse.redirect(newUrl, 308)
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/mods/:path*',
    '/resourcepacks/:path*',
    '/datapacks/:path*',
    '/shaders/:path*',
    '/modpacks/:path*',
    '/plugins/:path*',
  ],
}

