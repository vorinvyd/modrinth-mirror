'use client'

import { useState, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

function getGlowColors() {
  if (typeof window === 'undefined') return []
  const root = document.documentElement
  return [
    getComputedStyle(root).getPropertyValue('--glow-color-0').trim(),
    getComputedStyle(root).getPropertyValue('--glow-color-1').trim(),
    getComputedStyle(root).getPropertyValue('--glow-color-2').trim(),
    getComputedStyle(root).getPropertyValue('--glow-color-3').trim(),
    getComputedStyle(root).getPropertyValue('--glow-color-4').trim(),
    getComputedStyle(root).getPropertyValue('--glow-color-5').trim(),
    getComputedStyle(root).getPropertyValue('--glow-color-6').trim(),
    getComputedStyle(root).getPropertyValue('--glow-color-7').trim()
  ].filter(Boolean)
}

export default function AdCard() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [currentAd, setCurrentAd] = useState(null)
  const [currentHash, setCurrentHash] = useState(null)
  const [currentBanner, setCurrentBanner] = useState(null)
  const [domainGlowColor, setDomainGlowColor] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [ads, setAds] = useState([])
  const [banners, setBanners] = useState([])

  useEffect(() => {
    const loadContent = async () => {
      try {
        const [promotionsResponse, bannersResponse] = await Promise.all([
          fetch('/api/promotions', { cache: 'no-store' }),
          fetch('/api/banners-wide', { cache: 'no-store' })
        ])
        
        if (promotionsResponse.ok) {
          const contentData = await promotionsResponse.json()
          setAds(contentData)
        }
        
        if (bannersResponse.ok) {
          const bannersData = await bannersResponse.json()
          setBanners(bannersData)
        }
      } catch (error) {
      }
    }

    loadContent()
  }, [])

  useEffect(() => {
    if (ads.length === 0) return

    const getRandomItem = () => {
      const randomIndex = Math.floor(Math.random() * ads.length)
      return ads[randomIndex]
    }

    const getRandomBanner = () => {
      if (banners.length > 0) {
        const randomBannerIndex = Math.floor(Math.random() * banners.length)
        return banners[randomBannerIndex]
      }
      return '/banner.webp'
    }

    const item = getRandomItem()
    if (item) {
      const bannerImage = item.image || getRandomBanner()
      const glowColors = getGlowColors()
      const randomGlowColor = glowColors.length > 0 
        ? glowColors[Math.floor(Math.random() * glowColors.length)]
        : 'rgba(27, 217, 106, 0.9)'
      
      setCurrentBanner(bannerImage)
      setCurrentAd(item)
      setDomainGlowColor(randomGlowColor)
      
      const loadHash = async () => {
        try {
          const hashResponse = await fetch('/api/link-hash', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: item.url }),
            cache: 'no-store'
          })
          
          if (hashResponse.ok) {
            const { hash } = await hashResponse.json()
            setCurrentHash(hash)
            setIsVisible(true)
          }
        } catch (error) {
        }
      }

      loadHash()
    }
  }, [ads, banners, pathname, searchParams])

  const hashedUrl = currentHash ? `/api/link/${currentHash}` : '#'

  const handleClick = (e) => {
    if (!currentAd || !currentHash) {
      e.preventDefault()
      return
    }
    e.preventDefault()
    window.open(currentAd.url, '_blank', 'noopener,noreferrer')
  }

  if (!currentAd || !currentBanner || !currentHash || !isVisible) {
    return null
  }

  return (
    <div className="bg-modrinth-dark border border-transparent rounded-lg overflow-hidden">
      <a
        href={hashedUrl}
        onClick={handleClick}
        className="block group relative min-h-[120px] md:h-32 overflow-hidden"
        rel="noopener noreferrer"
        data-link="external"
      >
        <img
          src={currentBanner}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/85" />
        <div className="absolute bottom-2 left-2 md:top-3 md:right-3 md:bottom-auto md:left-auto z-20">
          <span className="inline-flex items-center px-2 py-1 text-[10px] md:text-xs font-medium text-gray-400/70">
            Реклама
          </span>
        </div>
        <div className="relative z-10 h-full flex flex-col md:flex-row md:items-center p-4 md:p-5">
          <div className="flex-1 mb-2 md:mb-0">
            <h4 
              className="text-sm md:text-base font-extrabold text-white mb-2 md:mb-3 line-clamp-2 md:line-clamp-1 drop-shadow-2xl transition-colors duration-300 group-hover:text-modrinth-green"
            >
              {currentAd.title}
            </h4>
            {currentAd.description && (
              <div className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-3 flex-wrap">
                {currentAd.description.split(' • ').map((item, idx) => (
                  <p 
                    key={idx} 
                    className="text-[11px] md:text-xs text-gray-200 drop-shadow-lg flex items-center"
                  >
                    <span className="w-1 h-1 bg-modrinth-green rounded-full mr-1.5 flex-shrink-0"></span>
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        {currentAd.domain && domainGlowColor && (
          <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 z-20">
            <p 
              className="text-[9px] md:text-[10px] text-gray-200/90 font-mono tracking-wider bg-black/30 backdrop-blur-sm px-2 py-1 rounded border border-white/10 transition-all duration-300"
              style={{
                textShadow: 'none'
              }}
            >
              <style dangerouslySetInnerHTML={{
                __html: `
                  .group:hover [data-domain-glow="${domainGlowColor}"] {
                    text-shadow: 0 0 8px ${domainGlowColor}, 0 0 16px ${domainGlowColor}, 0 0 24px ${domainGlowColor} !important;
                  }
                `
              }} />
              <span data-domain-glow={domainGlowColor}>{currentAd.domain}</span>
            </p>
          </div>
        )}
      </a>
    </div>
  )
}

