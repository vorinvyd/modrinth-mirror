import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname, search } = request.nextUrl
  
  // Мягкие редиректы со старых путей на новые /discover/* пути
  const redirects = {
    '/mods': '/discover/mods',
    '/resourcepacks': '/discover/resourcepacks',
    '/datapacks': '/discover/datapacks',
    '/shaders': '/discover/shaders',
    '/modpacks': '/discover/modpacks',
    '/plugins': '/discover/plugins',
  }
  
  // Проверяем точное совпадение или путь начинается с одного из старых путей
  for (const [oldPath, newPath] of Object.entries(redirects)) {
    if (pathname === oldPath || pathname.startsWith(oldPath + '/')) {
      const newPathname = pathname.replace(oldPath, newPath)
      const newUrl = new URL(newPathname + search, request.url)
      return NextResponse.redirect(newUrl, 308) // 308 Permanent Redirect (сохраняет метод запроса)
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

