import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background-color: ${(props) => props.theme['gray-900']};
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  padding: 0 1.25rem;

  border: none;
  border-radius: 6px;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: 700;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['green-300']};
  }
`
