import { useContext } from 'react'

import { TransactionsContext } from '../contexts/TransactionContext'

export function useTransaction() {
  const value = useContext(TransactionsContext)

  return value
}
