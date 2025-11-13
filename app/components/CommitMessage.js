'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

export default function CommitMessage({ message }) {
  if (!message) {
    return null
  }

  return (
    <div className="prose prose-invert prose-sm max-w-none mb-3 break-words">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {message}
      </ReactMarkdown>
    </div>
  )
}
