import { RadioGroupItemProps } from '@radix-ui/react-radio-group'
import { IconProps } from 'phosphor-react'
import React from 'react'

import { TransactionOptionContainer } from './styles'

interface TransactionOptionProps extends RadioGroupItemProps {
  Icon: React.ComponentType<IconProps>
  text: string
  variant: 'income' | 'outcome'
}

export function TransactionOption({
  Icon,
  text,
  variant,
  ...props
}: TransactionOptionProps) {
  return (
    <TransactionOptionContainer variant={variant} {...props}>
      <>
        <Icon size={24} />
        {text}
      </>
    </TransactionOptionContainer>
  )
}
