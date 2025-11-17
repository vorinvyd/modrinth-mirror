'use client'

import { useState, useEffect, useRef } from 'react'
import { detectBlocking, createFallbackBlock } from '../../lib/ads/blockerDetector'

const ROTATION_INTERVAL = 3 * 60 * 1000

const GLOW_COLORS = [
  'rgba(27, 217, 106, 0.9)',
  'rgba(59, 130, 246, 0.9)',
  'rgba(168, 85, 247, 0.9)',
  'rgba(236, 72, 153, 0.9)',
  'rgba(251, 146, 60, 0.9)',
  'rgba(34, 197, 94, 0.9)',
  'rgba(99, 102, 241, 0.9)',
  'rgba(219, 39, 119, 0.9)'
]

export default function AdBlock() {
  const [currentAd, setCurrentAd] = useState(null)
  const [currentHash, setCurrentHash] = useState(null)
  const [currentBanner, setCurrentBanner] = useState(null)
  const [domainGlowColor, setDomainGlowColor] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [ads, setAds] = useState([])
  const [banners, setBanners] = useState([])
  const containerRef = useRef(null)
  const fallbackAttempted = useRef(false)

  useEffect(() => {
    const loadContent = async () => {
      try {
        const [promotionsResponse, bannersResponse] = await Promise.all([
          fetch('/api/promotions', { cache: 'no-store' }),
          fetch('/api/banners', { cache: 'no-store' })
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

    const loadContent = async () => {
      const item = getRandomItem()
      if (item) {
        const bannerImage = item.image || getRandomBanner()
        const randomGlowColor = GLOW_COLORS[Math.floor(Math.random() * GLOW_COLORS.length)]
        
        setCurrentBanner(bannerImage)
        setCurrentAd(item)
        setDomainGlowColor(randomGlowColor)
        
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
            setCurrentAd(item)
            setIsVisible(true)
            
            setTimeout(() => {
              if (containerRef.current) {
                const isBlocked = detectBlocking(containerRef.current)
                if (isBlocked && !fallbackAttempted.current) {
                  fallbackAttempted.current = true
                  const containerId = `promo-container-${Date.now()}`
                  if (!containerRef.current.id) {
                    containerRef.current.id = containerId
                  }
                  createFallbackBlock({ ...item, hash, url: item.url, image: bannerImage }, containerId)
                }
              }
            }, 1500)
          }
        } catch (error) {
        }
      }
    }

    loadContent()

    const interval = setInterval(() => {
      loadContent()
    }, ROTATION_INTERVAL)

    return () => clearInterval(interval)
  }, [ads, banners])

  const hashedUrl = currentHash ? `/api/link/${currentHash}` : '#'

  const handleClick = (e) => {
    if (!currentAd || !currentHash) {
      e.preventDefault()
      return
    }
    e.preventDefault()
    window.open(currentAd.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div 
      ref={containerRef}
      className="bg-modrinth-dark border border-transparent rounded-lg overflow-hidden"
      data-promo="true"
      data-type="content"
    >
      <a
        href={hashedUrl}
        onClick={handleClick}
        className="block group relative min-h-[200px] overflow-hidden"
        rel="noopener noreferrer"
        data-link="external"
      >
        {currentAd && currentBanner ? (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${currentBanner})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85" />
            <div className="relative z-10 h-full flex flex-col p-5">
              <div className="flex-1 flex flex-col justify-center">
                <h4 
                  className="text-lg font-extrabold text-white mb-3 line-clamp-2 group-hover:text-modrinth-green transition-all duration-300 drop-shadow-2xl leading-tight"
                  style={{
                    textShadow: '0 0 0px currentColor',
                    transition: 'text-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = '0 0 20px rgba(27, 217, 106, 0.8), 0 0 40px rgba(27, 217, 106, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = '0 0 0px currentColor'
                  }}
                >
                  {currentAd.title}
                </h4>
                {currentAd.description && (
                  <div className="space-y-1.5">
                    {currentAd.description.split(' • ').map((item, idx) => (
                      <p 
                        key={idx} 
                        className="text-xs text-gray-100 drop-shadow-lg flex items-center transition-all duration-300"
                        style={{
                          textShadow: '0 0 0px currentColor',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.textShadow = '0 0 15px rgba(27, 217, 106, 0.7), 0 0 30px rgba(27, 217, 106, 0.3)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.textShadow = '0 0 0px currentColor'
                        }}
                      >
                        <span className="w-1.5 h-1.5 bg-modrinth-green rounded-full mr-2 flex-shrink-0 group-hover:shadow-[0_0_10px_rgba(27,217,106,0.8)] transition-shadow duration-300"></span>
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {currentAd.domain && domainGlowColor && (
              <div className="absolute bottom-3 right-3 z-20">
                <p 
                  className="text-[10px] text-gray-200/90 font-mono tracking-wider bg-black/30 backdrop-blur-sm px-2 py-1 rounded border border-white/10 transition-all duration-300"
                  style={{
                    textShadow: 'none',
                    ['--glow-color']: domainGlowColor
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
          </>
        ) : (
          <div className="absolute inset-0 bg-gray-800/50 animate-pulse">
            <div className="relative z-10 p-4 h-full flex flex-col justify-end">
              <div className="mb-2">
                <div className="h-5 w-20 bg-gray-700/50 rounded"></div>
              </div>
              <div className="h-4 w-3/4 bg-gray-700/50 rounded mb-2"></div>
              <div className="h-3 w-1/2 bg-gray-700/50 rounded"></div>
            </div>
          </div>
        )}
      </a>
    </div>
  )
}

