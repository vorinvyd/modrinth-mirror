import { NextResponse } from 'next/server'
import { getAdByHash } from '../../../../lib/ads/adManager'

export async function GET(request, { params }) {
  const { hash } = params
  
  try {
    const ad = getAdByHash(hash)
    
    if (!ad || !ad.url) {
      return NextResponse.redirect(new URL('/', request.url), 302)
    }
    
    return NextResponse.redirect(ad.url, 302)
  } catch (error) {
    return NextResponse.redirect(new URL('/', request.url), 302)
  }
}

