import React, { useCallback, useEffect, useState } from 'react'

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  containerRef: React.RefObject<HTMLDivElement>,
  slideRef: React.RefObject<HTMLDivElement>
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const updateButtons = useCallback(() => {
    if (!containerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current

    setPrevBtnDisabled(scrollLeft <= 0) // Disable when at the start
    setNextBtnDisabled(scrollLeft + clientWidth >= scrollWidth) // Disable when at the end
  }, [])

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    container.addEventListener('scroll', updateButtons)
    updateButtons()

    return () => container.removeEventListener('scroll', updateButtons)
  }, [updateButtons])

  const onPrevButtonClick = useCallback(() => {
    if (!containerRef.current || !slideRef.current) return

    const slideWidth = slideRef.current.offsetWidth + 32
    containerRef.current.scrollBy({
      left: -slideWidth,
      behavior: 'smooth'
    })
  }, [])

  const onNextButtonClick = useCallback(() => {
    if (!containerRef.current || !slideRef.current) return

    const slideWidth = slideRef.current.offsetWidth + 32
    containerRef.current.scrollBy({
      left: slideWidth,
      behavior: 'smooth'
    })
  }, [])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}
