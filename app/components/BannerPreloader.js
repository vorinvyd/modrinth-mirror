'use client'

import { useEffect } from 'react'

export default function BannerPreloader() {
  useEffect(() => {
    const preloadBanners = () => {
      for (let i = 1; i <= 12; i++) {
        const img = new Image()
        img.src = `/ads/banners/${i}.webp`
      }
    }

    preloadBanners()
  }, [])

  return null
}

