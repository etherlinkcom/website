import React from 'react'

type Image = {
  img: string
  alt: string
}

interface HeroCardProps {
  title: string
  image: Image[] | Image
}

export const HeroCard = () => {
  return <div>HeroCard</div>
}
