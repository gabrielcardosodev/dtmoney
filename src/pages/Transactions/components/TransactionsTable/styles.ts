import styled from 'styled-components'

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const TransactionsTableContainer = styled.table`
  width: 100%;

  /* margin-top: 1.5rem; */

  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;

    background-color: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['gray-300']};

    &:first-child {
      width: 40%;
      border-radius: 6px 0 0 6px;
    }

    &:last-child {
      text-align: end;
      border-radius: 0 6px 6px 0;
    }
  }
`

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
