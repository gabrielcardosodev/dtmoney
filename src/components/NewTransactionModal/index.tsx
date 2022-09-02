import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as z from 'zod'

import { useTransaction } from '../../hooks/useTransaction'
import { defaultTheme } from '../../styles/themes/default'
import { TransactionOption } from '../TransactionOption'
import { CloseButton, Content, OptionsContainer, Overlay } from './styles'

const newTransactionFormSchema = z.object({
  description: z.string().trim(),
  price: z.number(),
  category: z.string().trim(),
  type: z.enum(['income', 'outcome']),
})

type CreateTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

interface NewTransactionModalProps {
  modalIsOpen: boolean
  setModalIsOpen: (modalIsOpen: boolean) => void
}

export function NewTransactionModal({
  modalIsOpen,
  setModalIsOpen,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransaction()

  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CreateTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  async function handleCreateNewTransaction(data: CreateTransactionFormInputs) {
    try {
      createTransaction(data)

      setModalIsOpen(!modalIsOpen)
      reset()
      toast.success('Transação cadastrada com sucesso!')
    } catch (error) {
      toast.error('Ocorreu um erro ao cadastrar uma nova transação.')
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} color={defaultTheme['gray-500']} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            required
            placeholder="Descrição"
            {...register('description')}
          />

          <input
            type="number"
            required
            placeholder="Preço"
            {...register('price', { valueAsNumber: true })}
          />

          <input
            type="text"
            required
            placeholder="Categoria"
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <OptionsContainer
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionOption
                    value="income"
                    variant="income"
                    Icon={ArrowCircleUp}
                    text={'Entrada'}
                  />

                  <TransactionOption
                    value="outcome"
                    variant="outcome"
                    Icon={ArrowCircleDown}
                    text={'Saída'}
                  />
                </OptionsContainer>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
