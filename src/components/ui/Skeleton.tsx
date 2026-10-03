import React from 'react'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return <div className={`skeleton ${className}`} />
}

export function MedicationCardSkeleton() {
  return (
    <div className="rounded-lg bg-surface-0 p-4 shadow-sm">
      <Skeleton className="mb-2 h-5 w-3/4" />
      <Skeleton className="mb-1 h-4 w-1/2" />
      <Skeleton className="mb-3 h-3 w-1/3" />
      <div className="flex gap-2">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-16" />
      </div>
    </div>
  )
}
