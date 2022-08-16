import styled, { css } from 'styled-components'

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  margin-top: -5rem;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

export const SummaryCard = styled.div<SummaryCardProps>`
  padding: 1.5rem 2rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['gray-600']};

  & > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
      color: ${(props) => props.theme['gray-300']};
    }
  }

  & > strong {
    display: block;
    font-size: 2rem;
    color: ${(props) => props.theme['gray-100']};
    margin-top: 0.75rem;
  }

  ${(props) =>
    props.variant &&
    css`
      background-color: ${props.theme['green-700']};
    `}
`
