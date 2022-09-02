import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { useTransaction } from '../../../../hooks/useTransaction'
import {
  SearchFormContainer,
  SearchFormInput,
  SearchFormSubmitButton,
} from './styles'

const searchFormSchema = z.object({
  query: z.string().trim(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransaction } = useTransaction()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransaction(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <SearchFormInput
        placeholder="Busque uma transação"
        {...register('query')}
      />

      <SearchFormSubmitButton type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} weight="bold" />
        Buscar
      </SearchFormSubmitButton>
    </SearchFormContainer>
  )
}
