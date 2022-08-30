import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

interface TransactionOptionContainerProps {
  variant: 'income' | 'outcome'
}

// eslint-disable-next-line prettier/prettier
export const TransactionOptionContainer = styled(RadioGroup.Item)<TransactionOptionContainerProps>`
  padding: 1rem 1.5rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: none;
  border-radius: 6px;

  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['gray-600']};
  }

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};

    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-700']
        : props.theme['red-700']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
