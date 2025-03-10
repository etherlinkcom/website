import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState
} from 'react'

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

type PropType = ComponentPropsWithRef<'button'>

export const PrevButton: React.FC<PropType> = props => {
  const { disabled, children, ...restProps } = props

  return (
    <button
      className={`embla__button embla__button--prev bg-grey-700 backdrop-blur-[10px] rounded-[8px] p-2 ${disabled ? '' : 'shadow-[0px_0px_10.286px_rgba(56,255,156,0.4)]'}`}
      type='button'
      disabled={disabled}
      {...restProps}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M11.65 20.051C11.4249 20.276 11.1198 20.4023 10.8016 20.4023C10.4834 20.4023 10.1782 20.276 9.95316 20.051L2.75316 12.851C2.5282 12.626 2.40182 12.3208 2.40182 12.0026C2.40182 11.6844 2.5282 11.3792 2.75316 11.1542L9.95316 3.9542C10.1795 3.73561 10.4826 3.61466 10.7972 3.61739C11.1119 3.62012 11.4129 3.74633 11.6353 3.96882C11.8578 4.19131 11.984 4.49228 11.9868 4.80692C11.9895 5.12155 11.8686 5.42468 11.65 5.651L6.49836 10.8026L20.4016 10.8026C20.7198 10.8026 21.025 10.929 21.2501 11.1541C21.4751 11.3791 21.6016 11.6843 21.6016 12.0026C21.6016 12.3209 21.4751 12.6261 21.2501 12.8511C21.025 13.0762 20.7198 13.2026 20.4016 13.2026L6.49836 13.2026L11.65 18.3542C11.8749 18.5792 12.0013 18.8844 12.0013 19.2026C12.0013 19.5208 11.8749 19.826 11.65 20.051Z'
          fill={`${disabled ? '#515151' : '#38FF9C'}`}
        />
      </svg>
      {children}
    </button>
  )
}

export const NextButton: React.FC<PropType> = props => {
  const { disabled, children, ...restProps } = props

  return (
    <button
      className={`embla__button embla__button--next bg-grey-700 backdrop-blur-[10px] rounded-[8px] p-2 ${disabled ? '' : 'shadow-[0px_0px_10.286px_rgba(56,255,156,0.4)]'}`}
      type='button'
      disabled={disabled}
      {...restProps}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M12.35 3.949C12.5751 3.72403 12.8802 3.59766 13.1984 3.59766C13.5166 3.59766 13.8218 3.72403 14.0468 3.949L21.2468 11.149C21.4718 11.374 21.5982 11.6792 21.5982 11.9974C21.5982 12.3156 21.4718 12.6208 21.2468 12.8458L14.0468 20.0458C13.8205 20.2644 13.5174 20.3853 13.2028 20.3826C12.8881 20.3799 12.5871 20.2537 12.3647 20.0312C12.1422 19.8087 12.016 19.5077 12.0132 19.1931C12.0105 18.8784 12.1314 18.5753 12.35 18.349L17.5016 13.1974H3.59844C3.28018 13.1974 2.97495 13.071 2.74991 12.8459C2.52487 12.6209 2.39844 12.3157 2.39844 11.9974C2.39844 11.6791 2.52487 11.3739 2.74991 11.1489C2.97495 10.9238 3.28018 10.7974 3.59844 10.7974H17.5016L12.35 5.6458C12.1251 5.42077 11.9987 5.1156 11.9987 4.7974C11.9987 4.4792 12.1251 4.17403 12.35 3.949Z'
          fill={`${disabled ? '#515151' : '#38FF9C'}`}
        />
      </svg>
      {children}
    </button>
  )
}
