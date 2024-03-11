import React from 'react'

export default function Container({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`container p-8 mx-auto xl:px-0 ${className}`}>
      {children}
    </div>
  )
}
