'use client'

import { useEffect } from 'react'

export default function BannerPreloader() {
  useEffect(() => {
    const preloadBanners = () => {
      for (let i = 1; i <= 12; i++) {
        const img = new Image()
        img.src = `/p/1/${i}.webp`
      }
    }

    preloadBanners()
  }, [])

  return null
}

