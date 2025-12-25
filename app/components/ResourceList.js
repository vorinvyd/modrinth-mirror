'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import ResourceCard from './ResourceCard'
import ResourceCardSkeleton from './ResourceCardSkeleton'

export default function ResourceList({ resources, type = 'mod' }) {
  const searchParams = useSearchParams()
  const [showSkeleton, setShowSkeleton] = useState(false)
  const prevParamsRef = useRef(searchParams.toString())

  useEffect(() => {
    const currentParams = searchParams.toString()
    if (prevParamsRef.current !== currentParams) {
      setShowSkeleton(true)
      prevParamsRef.current = currentParams
      
      const timer = setTimeout(() => {
        setShowSkeleton(false)
      }, 300)
      
      return () => clearTimeout(timer)
    }
  }, [searchParams])

  if (showSkeleton) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 10 }).map((_, index) => (
          <ResourceCardSkeleton key={index} />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {resources.map((resource) => (
        <ResourceCard key={resource.project_id} resource={resource} type={type} />
      ))}
    </div>
  )
}

