import React, { ComponentPropsWithRef } from 'react'

type PropType = ComponentPropsWithRef<'button'> & {
  isSelected: boolean
}

export const DotButton: React.FC<PropType> = ({
  isSelected,
  ...restProps
}: {
  isSelected: boolean
}) => {
  return (
    <button type='button' {...restProps}>
      {isSelected ? (
        <img src='/img/icons/Dot-selected.svg' alt='dot' />
      ) : (
        <img src='/img/icons/Dot-unselected.svg' alt='dot' />
      )}
    </button>
  )
}
