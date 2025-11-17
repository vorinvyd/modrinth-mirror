import { NextResponse } from 'next/server'
import { readdir } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  try {
    const bannersDir = join(process.cwd(), 'public', 'p', '2')
    const files = await readdir(bannersDir)
    
    const banners = files
      .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .map(file => `/p/2/${file}`)
      .sort((a, b) => {
        const numA = parseInt(a.match(/(\d+)\.webp$/)?.[1] || '0')
        const numB = parseInt(b.match(/(\d+)\.webp$/)?.[1] || '0')
        return numA - numB
      })
    
    return NextResponse.json(banners, {
      headers: {
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
        'CDN-Cache-Control': 'public, max-age=3600',
        'Vercel-CDN-Cache-Control': 'public, max-age=3600'
      }
    })
  } catch (error) {
    return NextResponse.json(['/banner.webp'], {
      headers: {
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
      }
    })
  }
}

