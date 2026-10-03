import React, { useState } from 'react'

interface TooltipProps {
  content: string
  children: React.ReactNode
}

export function Tooltip({ content, children }: TooltipProps) {
  const [show, setShow] = useState(false)

  return (
    <div className="relative inline-block">
      <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
      </div>
      {show && (
        <div className="absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-navy-900 px-3 py-1.5 text-xs text-white shadow-lg">
          {content}
        </div>
      )}
    </div>
  )
}
