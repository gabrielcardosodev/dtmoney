import { RadioGroupItemProps } from '@radix-ui/react-radio-group'
import { IconProps } from 'phosphor-react'
import React from 'react'

import { TransactionOptionContainer } from './styles'

interface TransactionOptionProps extends RadioGroupItemProps {
  icon: IconProps
  text: string
  variant: 'income' | 'outcome'
}

export function TransactionOption({
  icon,
  text,
  variant,
  ...props
}: TransactionOptionProps) {
  return (
    <TransactionOptionContainer variant={variant} {...props}>
      <>
        {icon}
        {text}
      </>
    </TransactionOptionContainer>
  )
}
