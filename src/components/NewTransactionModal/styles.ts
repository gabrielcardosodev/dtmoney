import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background-color: #00000075;
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;

  min-width: 33rem;
  padding: 3rem 3rem 2.5rem;

  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 6px;

  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;

    margin-top: 2rem;
    gap: 1rem;

    input {
      padding: 1rem;

      color: ${(props) => props.theme['gray-300']};
      background-color: ${(props) => props.theme['gray-900']};

      border: 0;
      border-radius: 6px;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 58px;

      margin-top: 1.5rem;
      padding: 0 1.25rem;

      border: none;
      border-radius: 6px;

      background-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      font-weight: 700;

      cursor: pointer;
      transition: background-color 0.2s;

      &:disabled {
        background-color: ${(props) => props.theme['gray-500']};
        color: ${(props) => props.theme['gray-400']};
        border-color: ${(props) => props.theme['gray-500']};

        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme['green-300']};
      }
    }
  }
`
export const OptionsContainer = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 0.5rem;

  gap: 1rem;
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  background-color: transparent;
  color: ${(props) => props.theme['gray-500']};

  border: 0;
  line-height: 0;
  cursor: pointer;
`
