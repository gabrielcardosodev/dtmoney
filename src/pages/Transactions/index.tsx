import React from 'react'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsTable } from './components/TransactionsTable'
import { TransactionsContainer } from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable />
      </TransactionsContainer>
    </div>
  )
}
