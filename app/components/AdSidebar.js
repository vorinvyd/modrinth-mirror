'use client'

import { useState, useEffect } from 'react'

const ROTATION_INTERVAL = 3 * 60 * 1000

export default function AdSidebar() {
  const [currentAd, setCurrentAd] = useState(null)
  const [currentHash, setCurrentHash] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [ads, setAds] = useState([])

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch('/api/promotions')
        if (response.ok) {
          const contentData = await response.json()
          setAds(contentData)
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

    const loadContent = async () => {
      const item = getRandomItem()
      if (item) {
        try {
          const hashResponse = await fetch('/api/link-hash', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: item.url }),
          })
          
          if (hashResponse.ok) {
            const { hash } = await hashResponse.json()
            setCurrentHash(hash)
            setCurrentAd(item)
            setIsVisible(true)
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
  }, [ads])

  if (!currentAd || !currentHash || !isVisible) {
    return null
  }

  const hashedUrl = `/api/link/${currentHash}`

  const handleClick = (e) => {
    e.preventDefault()
    window.open(currentAd.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <aside className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div className="w-64 bg-gray-900/95 backdrop-blur-sm rounded-lg border border-gray-800 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-modrinth-green/20">
        <a
          href={hashedUrl}
          onClick={handleClick}
          className="block group"
          rel="noopener noreferrer"
        >
          {currentAd.image && (
            <div className="relative w-full h-48 overflow-hidden bg-gray-800">
              <img
                src={currentAd.image}
                alt={currentAd.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2 group-hover:text-modrinth-green transition-colors">
              {currentAd.title}
            </h3>
            {currentAd.description && (
              <p className="text-gray-400 text-xs line-clamp-2">
                {currentAd.description}
              </p>
            )}
          </div>
        </a>
        <div className="px-4 pb-3">
          <span className="text-gray-500 text-xs">Партнёр</span>
        </div>
      </div>
    </aside>
  )
}

