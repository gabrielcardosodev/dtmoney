import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import React from 'react'

import { defaultTheme } from '../../styles/themes/default'
import { TransactionOption } from '../TransactionOption'
import { CloseButton, Content, OptionsContainer, Overlay } from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} color={defaultTheme['gray-500']} />
        </CloseButton>

        <form action="">
          <input type="text" required placeholder="Descrição" />
          <input type="number" required placeholder="Preço" />
          <input type="text" required placeholder="Categoria" />

          <OptionsContainer>
            <TransactionOption
              value="income"
              variant="income"
              icon={<ArrowCircleUp size={24} />}
              text={'Entrada'}
            />

            <TransactionOption
              value="outcome"
              variant="outcome"
              icon={<ArrowCircleDown size={24} />}
              text={'Saída'}
            />
          </OptionsContainer>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
