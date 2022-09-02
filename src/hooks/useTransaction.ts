import { useContextSelector } from 'use-context-selector'

import { TransactionsContext } from '../contexts/TransactionContext'

export function useTransaction() {
  const value = useContextSelector(TransactionsContext, (context) => {
    return context
  })

  return value
}
