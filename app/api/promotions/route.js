import { NextResponse } from 'next/server'
import { getAllAds } from '../../../lib/ads/adManager'

export async function GET() {
  try {
    const ads = getAllAds()
    
    const shuffled = [...ads].sort(() => Math.random() - 0.5)
    
    return NextResponse.json(shuffled, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error) {
    return NextResponse.json([], { status: 500 })
  }
}
