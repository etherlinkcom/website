import React from 'react'

export default function Container({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`px-6 lg:px-[104px] mx-auto ${className}`}>{children}</div>
  )
}
