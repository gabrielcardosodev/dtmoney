import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`
export const SearchFormInput = styled.input`
  flex: 1;
  padding: 1rem;
  color: ${(props) => props.theme['gray-300']};
  background-color: ${(props) => props.theme['gray-900']};
  border: 0;
  border-radius: 6px;

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const SearchFormSubmitButton = styled.button`
  height: 51px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: transparent;
  color: ${(props) => props.theme['green-300']};
  border: 1px solid ${(props) => props.theme['green-300']};
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;

  transition: all 0.2s;

  &:disabled {
    background-color: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-400']};
    border-color: ${(props) => props.theme['gray-500']};

    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme['green-500']};
  }
`
