import React, { ComponentPropsWithRef } from 'react'

type PropType = ComponentPropsWithRef<'button'> & {
  className?: string
}

export const EmblaNavButton: React.FC<PropType> = props => {
  const { className, disabled, children, ...restProps } = props

  return (
    <button
      className={`embla__button embla__button--prev bg-grey-700 backdrop-blur-[10px] rounded-[8px] p-2 
            ${disabled ? '' : 'shadow-[0px_0px_10.286px_rgba(56,255,156,0.4)]'} ${className}`}
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
