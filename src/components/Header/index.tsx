import * as Dialog from '@radix-ui/react-dialog'
import React, { useState } from 'react'

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { NewTransactionButton, HeaderContainer, HeaderContent } from './styles'

export function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root open={modalIsOpen} onOpenChange={setModalIsOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
          />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
