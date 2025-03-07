import React from 'react'

export const Content = ({
  text,
  className
}: {
  text: string
  className?: string
}) => {
  return (
    <p
      className={`font-light text-grey-50 leading-[24px] -tracking-[0.32px] ${className}`}
    >
      {text}
    </p>
  )
}
