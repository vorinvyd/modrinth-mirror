import { NextResponse } from 'next/server'
import { hashUrlSync } from '../../../lib/d/urlHasher'

export async function POST(request) {
  try {
    const { url } = await request.json()
    
    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 })
    }
    
    const hash = hashUrlSync(url)
    return NextResponse.json({ hash })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to hash URL' }, { status: 500 })
  }
}

