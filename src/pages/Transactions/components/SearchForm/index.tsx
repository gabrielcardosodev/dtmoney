import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'

import {
  SearchFormContainer,
  SearchFormInput,
  SearchFormSubmitButton,
} from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormInput placeholder="Busque uma transação" />
      <SearchFormSubmitButton type="submit">
        <MagnifyingGlass size={20} weight="bold" />
        Buscar
      </SearchFormSubmitButton>
    </SearchFormContainer>
  )
}
