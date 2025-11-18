'use client'

import { useRef, useEffect, useState } from 'react'
import Lottie from 'lottie-react'

export default function MitelisButton({ animationData }) {
  const lottieRef = useRef(null)
  const [hashedUrl, setHashedUrl] = useState('/api/link/')

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1.2)
    }

    const originalUrl = 'https://mitelis.com'
    fetch('/api/link-hash', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: originalUrl }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.hash) {
          setHashedUrl(`/api/link/${data.hash}`)
        }
      })
      .catch(err => {
        console.error('Failed to get hashed URL:', err)
        setHashedUrl(originalUrl)
      })
  }, [])

  const handleMouseEnter = () => {
    if (lottieRef.current) {
      lottieRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (lottieRef.current) {
      lottieRef.current.stop()
    }
  }

  return (
    <a
      href={hashedUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600/90 to-red-600/90 hover:from-orange-500 hover:to-red-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/50 backdrop-blur-sm group relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 flex items-center gap-3">
        {animationData && (
          <div className="w-8 h-8 flex-shrink-0">
            <Lottie
              lottieRef={lottieRef}
              animationData={animationData}
              loop={false}
              autoplay={false}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        )}
        <span className="text-lg pr-2">Узнать больше о mitelis.com</span>
      </div>
    </a>
  )
}

